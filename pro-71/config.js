import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

  apiKey: "AIzaSyArsCiOteFuKg56sWRD15bq5usf2s1WKcc",
  authDomain: "pro-69e4b.firebaseapp.com",
  databaseURL: "https://pro-69e4b.firebaseio.com",
  projectId: "pro-69e4b",
  storageBucket: "pro-69e4b.appspot.com",
  messagingSenderId: "970437249216",
  appId: "1:970437249216:web:e5acaa52038a2d53eb4525"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

