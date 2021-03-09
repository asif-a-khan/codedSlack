import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCahq3srfj_TCvttq8cMzXIs2_TiSZouAk",
  authDomain: "codedecom-8cfbc.firebaseapp.com",
  projectId: "codedecom-8cfbc",
  storageBucket: "codedecom-8cfbc.appspot.com",
  messagingSenderId: "672814744557",
  appId: "1:672814744557:web:e8a79f4ecba532a17c1de4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
