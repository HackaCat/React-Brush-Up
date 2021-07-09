import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRcK0s7_xMmE3aPiH92Pjg2FZSF44fsn4",
  authDomain: "cafereact-ff9e1.firebaseapp.com",
  databaseURL: "https://cafereact-ff9e1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cafereact-ff9e1",
  storageBucket: "cafereact-ff9e1.appspot.com",
  messagingSenderId: "946133042595",
  appId: "1:946133042595:web:c19e09ee434b371ed6c616"

});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
