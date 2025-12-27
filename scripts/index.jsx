// app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzLOs90fyRYCwPuzzhcxqsvwR8yktBayo",
  authDomain: "my-app-8a145.firebaseapp.com",
  projectId: "my-app-8a145",
  storageBucket: "my-app-8a145.appspot.com",
  messagingSenderId: "228302028804",
  appId: "1:228302028804:web:5f53ea03ef85f991577551",
  databaseURL: "https://my-app-8a145-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
