import * as firebase from "firebase/app";
import { ThunkAction } from "redux-thunk";
import * as constants from "../constants";
import { firebaseAuth, firebaseDb, firebaseGoogleProvider } from "../firebase";
import { IStoreState } from "../types";

export interface IGraphData {
  color: string;
  data: IData[];
  graphType: string;
  id: string | null;
  title: string;
  xAxis: string;
  yAxis: string;
}

export interface ISetGraph {
  graph: IGraphData;
  type: constants.SET_GRAPH_DATA;
}

export interface IData {
  columnX: string | number;
  columnY: number;
}

export interface ISetData {
  data: IData[];
  type: constants.SET_DATA;
}

export interface ISetColor {
  color: string;
  type: constants.SET_COLOR;
}

export interface ISetID {
  id: string | null;
  type: constants.SET_ID;
}

export interface ISetType {
  graphType: string;
  type: constants.SET_TYPE;
}

export interface ISetTitle {
  title: string;
  type: constants.SET_TITLE;
}

export interface ISetXAxis {
  xAxis: string;
  type: constants.SET_X_AXIS;
}

export interface ISetYAxis {
  yAxis: string;
  type: constants.SET_Y_AXIS;
}

export interface IFetchUser {
  user: firebase.User | null;
  type: constants.FETCH_USER;
}

export interface IFetchGraphs {
  graphs: IGraphData[];
  type: constants.FETCH_GRAPHS;
}

export type Action =
  | ISetGraph
  | ISetColor
  | ISetData
  | ISetID
  | ISetType
  | ISetTitle
  | ISetXAxis
  | ISetYAxis
  | IFetchUser
  | IFetchGraphs;

type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, Action>;

interface IgraphInfo {
  idExist: boolean;
  id: string | undefined;
}

export const fetchGraphs = (
  user: firebase.User | null
): ThunkResult<void> => dispatch => {
  if (user) {
    const graphs: IGraphData[] = [];
    firebaseDb
      .collection("users")
      .doc(`${user.uid}`)
      .collection("graphs")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          graphs.push(doc.data().graph);
        });
      })
      .then(() => {
        dispatch({ graphs, type: constants.FETCH_GRAPHS });
      });
  }
  return;
};

export const setGraph = (
  graph: IGraphData,
  user: firebase.User | null
): ThunkResult<void> => dispatch => {
  const userId = user!.uid;
  const graphsRef = firebaseDb
    .collection("users")
    .doc(`${userId}`)
    .collection("graphs");

  const checkGraphId = async () => {
    const querySnapshot = await graphsRef
      .where("graph.id", "==", graph.id)
      .get();
    const idExist = !querySnapshot.empty;
    const id = idExist ? querySnapshot.docs[0].id : undefined;
    return Promise.resolve({ idExist, id });
  };

  const CreateOrUpdateGraph = (graphInfo: IgraphInfo) => {
    const { idExist, id } = graphInfo;
    if (idExist) {
      // update
      graphsRef.doc(id).set({ graph });
    } else {
      // create new graph
      graphsRef
        .add({
          graph
        })
        .then((docRef: any) => {
          // tslint:disable-next-line:no-console
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error: any) => {
          // tslint:disable-next-line:no-console
          console.error("Error adding document: ", error);
        });
    }
    dispatch({ graph, type: constants.SET_GRAPH_DATA });
  };

  checkGraphId().then(CreateOrUpdateGraph);
};

export function setColor(color: string): ISetColor {
  return {
    color,
    type: constants.SET_COLOR
  };
}

export function setData(data: IData[]): ISetData {
  return {
    data,
    type: constants.SET_DATA
  };
}

export function setGraphType(graphType: string): ISetType {
  return {
    graphType,
    type: constants.SET_TYPE
  };
}

export function setID(id: string | null): ISetID {
  return {
    id,
    type: constants.SET_ID
  };
}

export function setTitle(title: string): ISetTitle {
  return {
    title,
    type: constants.SET_TITLE
  };
}

export function setXAxis(xAxis: string): ISetXAxis {
  return {
    type: constants.SET_X_AXIS,
    xAxis
  };
}

export function setYAxis(yAxis: string): ISetYAxis {
  return {
    type: constants.SET_Y_AXIS,
    yAxis
  };
}

export const fetchUser = (): ThunkResult<void> => dispatch => {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: constants.FETCH_USER,
        user
      });
    } else {
      dispatch({
        type: constants.FETCH_USER,
        user: null
      });
    }
  });
};

export const signIn = (): ThunkResult<void> => dispatch => {
  firebaseGoogleProvider.addScope("profile");
  firebaseGoogleProvider.addScope("email");
  firebaseAuth
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      firebaseAuth.signInWithRedirect(firebaseGoogleProvider);
    })
    .catch(error => {
      // tslint:disable-next-line:no-console
      console.log(error);
    });
};

export const signOut = (): ThunkResult<void> => dispatch => {
  firebaseAuth
    .signOut()
    .then(() => {
      dispatch({
        type: constants.FETCH_USER,
        user: null
      });
    })
    .catch(error => {
      // tslint:disable-next-line:no-console
      console.log(error);
    });
};
