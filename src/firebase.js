import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANd8NZwsztBLHz_ihGYW8iIDQD_7gyVBM",
  authDomain: "chat-firebase-28868.firebaseapp.com",
  projectId: "chat-firebase-28868",
  storageBucket: "chat-firebase-28868.appspot.com",
  messagingSenderId: "1038541557499",
  appId: "1:1038541557499:web:01ed1d37003f8e74ee2a5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
