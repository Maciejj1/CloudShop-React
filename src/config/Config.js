import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBzLxzYKFfxp6tA7Ql6r2VGJOm7kEz3PtU",
    authDomain: "cloudshop-61728.firebaseapp.com",
    projectId: "cloudshop-61728",
    storageBucket: "cloudshop-61728.appspot.com",
    messagingSenderId: "471376515755",
    appId: "1:471376515755:web:550d1567f4ec6e96b91dee",
    measurementId: "G-MTXKR51M7L"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();
  export { auth , db , storage}