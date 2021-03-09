import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrn_Sugb6uv7s4wLwxa3AxgfM6Lda_Az0",
  authDomain: "codedslack.firebaseapp.com",
  projectId: "codedslack",
  storageBucket: "codedslack.appspot.com",
  messagingSenderId: "925822756811",
  appId: "1:925822756811:web:2738e642f99fb3a6a2f84e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
