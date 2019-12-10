import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7bdSdMcgzdPZGhioPZwcAMxDEd0wEec8",
    authDomain: "shop-vue-b1d0d.firebaseapp.com",
    databaseURL: "https://shop-vue-b1d0d.firebaseio.com",
    projectId: "shop-vue-b1d0d",
    storageBucket: "shop-vue-b1d0d.appspot.com",
    messagingSenderId: "587024618617",
    appId: "1:587024618617:web:f811afe01c9f66ca5cb0a8",
    measurementId: "G-5EXRM4G29F"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();