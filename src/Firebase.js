import firebase from "firebase/app";
import "firebase/firestore";


const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyCbeiBlGZZEbcollOeLLbDweuZrF519P3Y",
    authDomain: "facebook-messenger-553c6.firebaseapp.com",
    databaseURL: "https://facebook-messenger-553c6.firebaseio.com",
    projectId: "facebook-messenger-553c6",
    storageBucket: "facebook-messenger-553c6.appspot.com",
    messagingSenderId: "1074898254227",
    appId: "1:1074898254227:web:8a36739ac22dbdc118d066",
    measurementId: "G-PPE3WSY082"
  });

  const db = firebaseApp.firestore();

  export default db;