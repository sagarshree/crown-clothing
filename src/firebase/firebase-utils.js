import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmeVyCDu4LEwzVbQcOOjiL9wPyu7c4vUE",
  authDomain: "crown-db-7809b.firebaseapp.com",
  databaseURL: "https://crown-db-7809b.firebaseio.com",
  projectId: "crown-db-7809b",
  storageBucket: "crown-db-7809b.appspot.com",
  messagingSenderId: "18383388017",
  appId: "1:18383388017:web:3c501cc38fbcb6f2ae8ad0",
  measurementId: "G-YG3K0YDZ70",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
