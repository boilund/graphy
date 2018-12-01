import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./config";

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth(firebaseApp);
export const firebaseGoogleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseDb = firebase.firestore(firebaseApp);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
