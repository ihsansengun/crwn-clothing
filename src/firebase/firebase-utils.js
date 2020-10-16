import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4kJ_0yPRn-iBbam9HraknUxQr-alCBgs",
  authDomain: "crwn-db-7495d.firebaseapp.com",
  databaseURL: "https://crwn-db-7495d.firebaseio.com",
  projectId: "crwn-db-7495d",
  storageBucket: "crwn-db-7495d.appspot.com",
  messagingSenderId: "224154638540",
  appId: "1:224154638540:web:58320aa767ea036221ca69",
  measurementId: "G-6PE25RM11Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
