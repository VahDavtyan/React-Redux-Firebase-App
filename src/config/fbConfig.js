import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const  firebaseConfig = {
  apiKey: "AIzaSyCIip3YeT0y_muHS2eQjS9FMZWASW2xrNM",
  authDomain: "myfirstproject-4000c.firebaseapp.com",
  databaseURL: "https://myfirstproject-4000c.firebaseio.com",
  projectId: "myfirstproject-4000c",
  storageBucket: "myfirstproject-4000c.appspot.com",
  messagingSenderId: "200741667554",
  appId: "1:200741667554:web:49128e140fca3e71a754bb",
  measurementId: "G-R5GGGX0K5W",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
