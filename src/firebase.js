// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD52XS1czlTYxL5o7SUf-Aec1tWerdTDjU",
    authDomain: "clone-a62b3.firebaseapp.com",
    projectId: "clone-a62b3",
    storageBucket: "clone-a62b3.appspot.com",
    messagingSenderId: "452495101586",
    appId: "1:452495101586:web:845776efad04c6e3b9e04b",
    measurementId: "G-BRFTRP0YDW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth };