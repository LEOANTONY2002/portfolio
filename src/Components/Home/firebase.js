import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCkZg_0il877XvZCIFcFX-O5uGNESuw2_U",
  authDomain: "leoantony-1ebe3.firebaseapp.com",
  projectId: "leoantony-1ebe3",
  storageBucket: "leoantony-1ebe3.appspot.com",
  messagingSenderId: "98031854819",
  appId: "1:98031854819:web:fa43f54c7c5a5e252f11d6",
  measurementId: "G-89NPLBL9VH",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };
