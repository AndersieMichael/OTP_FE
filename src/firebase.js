import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBxkWth5G9HMBmTTaK4L-Ist9tm72NVdY0",
    authDomain: "test-firebase-9cfe5.firebaseapp.com",
    projectId: "test-firebase-9cfe5",
    storageBucket: "test-firebase-9cfe5.appspot.com",
    messagingSenderId: "765055835870",
    appId: "1:765055835870:web:d5cc8f5b4012f2ac59ec4f" 
  };

  firebase.initializeApp(firebaseConfig);
export default firebase