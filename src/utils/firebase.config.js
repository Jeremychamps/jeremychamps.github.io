import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp ({
  apiKey: "AIzaSyB1Yus-EVwawrqy0jNUg8rgYsotH7L93ds",
  authDomain: "jeuaboire-4b526.firebaseapp.com",
  projectId: "jeuaboire-4b526",
  storageBucket: "jeuaboire-4b526.appspot.com",
  messagingSenderId: "142399843038",
  appId: "1:142399843038:web:cfc3034ed141c1f691b04f",
  measurementId: "G-ZR77C4LMPF"
});

export const auth = app.auth();
export const db = getFirestore();
export default app;