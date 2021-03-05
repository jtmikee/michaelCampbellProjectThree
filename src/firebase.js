import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCEcsKx99XGuSH9sExIFGd1td0uRrTyu4Q",
    authDomain: "project-three-myplace.firebaseapp.com",
    projectId: "project-three-myplace",
    storageBucket: "project-three-myplace.appspot.com",
    messagingSenderId: "829252832191",
    appId: "1:829252832191:web:5bcaeffa01e23e26982f0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;
