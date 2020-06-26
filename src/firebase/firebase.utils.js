import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCayy1dvPj3_X5Yr3P54iKMnsIlW9ItbPE",
  authDomain: "crwn-clothing-308d3.firebaseapp.com",
  databaseURL: "https://crwn-clothing-308d3.firebaseio.com",
  projectId: "crwn-clothing-308d3",
  storageBucket: "crwn-clothing-308d3.appspot.com",
  messagingSenderId: "49912968768",
  appId: "1:49912968768:web:a7408b320b9b4f86fc91a5",
  measurementId: "G-1GGXWGPDS6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;