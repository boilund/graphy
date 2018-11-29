import { Action } from "../actions";
import {
  FETCH_GRAPHS,
  FETCH_USER,
  SET_COLOR,
  SET_DATA,
  SET_GRAPH_DATA,
  SET_ID,
  SET_TITLE,
  SET_TYPE,
  SET_X_AXIS,
  SET_Y_AXIS
} from "../constants/";
import { initialState } from "../store/";
import { IStoreState } from "../types/";

export function reducer(
  state: IStoreState = initialState,
  action: Action
): IStoreState {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.user };
    case FETCH_GRAPHS:
      return { ...state, graphs: action.graphs };
    case SET_COLOR:
      return { ...state, color: action.color };
    case SET_DATA:
      return { ...state, data: action.data };
    case SET_GRAPH_DATA:
      if (state.graphs.some(g => g.id === action.graph.id)) {
        const targetGraph = state.graphs.find(g => g.id === action.graph.id);
        if (targetGraph) {
          const targetIndex = state.graphs.indexOf(targetGraph);
          state.graphs.slice(targetIndex, 1).push(action.graph);
        }
      } else {
        state.graphs.push(action.graph);
      }
      return { ...state, graphs: state.graphs };
    case SET_ID:
      return { ...state, id: action.id };
    case SET_TITLE:
      return { ...state, title: action.title };
    case SET_TYPE:
      return { ...state, graphType: action.graphType };
    case SET_X_AXIS:
      return { ...state, xAxis: action.xAxis };
    case SET_Y_AXIS:
      return { ...state, yAxis: action.yAxis };
    default:
      return state;
  }
}
