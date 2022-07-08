import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_bJm-dRyMn7AC-KdLXTC6b1HtRjUdpfk",
  authDomain: "rn-uber-eats-app.firebaseapp.com",
  projectId: "rn-uber-eats-app",
  storageBucket: "rn-uber-eats-app.appspot.com",
  messagingSenderId: "993136629135",
  appId: "1:993136629135:web:e32aa470399f2cc45aa7fa",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
