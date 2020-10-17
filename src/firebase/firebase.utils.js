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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
