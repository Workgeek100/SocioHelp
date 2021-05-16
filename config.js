import firebase from 'firebase'
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH904aTB79GtVYJGlifzEHXku7cjafQFs",
    authDomain: "sociohelp-a3cdb.firebaseapp.com",
    projectId: "sociohelp-a3cdb",
    storageBucket: "sociohelp-a3cdb.appspot.com",
    messagingSenderId: "370676691667",
    appId: "1:370676691667:web:1715803d3a1e0dddca1a26",
    measurementId: "G-N0DS3M2VNJ"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();