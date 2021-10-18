import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBl5iebmTg6KCE2RJspdiCcit9ml1tx1Qs",
    authDomain: "react-native-firebase-fa972.firebaseapp.com",
    projectId: "react-native-firebase-fa972",
    storageBucket: "react-native-firebase-fa972.appspot.com",
    messagingSenderId: "987849618640",
    appId: "1:987849618640:web:54e5a7caaab228f994dad5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};