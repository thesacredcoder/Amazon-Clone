import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-CxTXvTwlaQgYadTynELiZ7S-_y1huvo",
  authDomain: "clone-94539.firebaseapp.com",
  projectId: "clone-94539",
  storageBucket: "clone-94539.appspot.com",
  messagingSenderId: "371274528304",
  appId: "1:371274528304:web:7da03d250cde6ac6c4dff5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
