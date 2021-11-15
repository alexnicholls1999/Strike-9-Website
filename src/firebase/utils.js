import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const store = firebase.firestore();

export default firebase;
