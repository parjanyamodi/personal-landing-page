import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDNuf6jj88B6y_YHG40Shab5brTxMGAxtg",
  authDomain: "landing-page-parjanya.firebaseapp.com",
  projectId: "landing-page-parjanya",
  storageBucket: "landing-page-parjanya.appspot.com",
  messagingSenderId: "200183035115",
  appId: "1:200183035115:web:b2934736d68e361e41baae",
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db };