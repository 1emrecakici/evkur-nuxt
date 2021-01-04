
import * as firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAehBUAYdoLX1ig70qShsAmg4h7enW0f1M",
    authDomain: "evkur-nuxt.firebaseapp.com",
    projectId: "evkur-nuxt",
    storageBucket: "evkur-nuxt.appspot.com",
    messagingSenderId: "893886173970",
    appId: "1:893886173970:web:f9fc853dd1138c7f4799cb",
    measurementId: "G-SEEE210R32"
  };

  let app = null;

  if(!firebase.apps.length){

    app= firebase.initializeApp(firebaseConfig);
  }

  export default firebase;