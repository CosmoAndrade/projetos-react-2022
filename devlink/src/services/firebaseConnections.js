
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBazZHcMiFtdvj2HfHMaKdHtMFEH9PnUY0",
  authDomain: "devlinks-6c159.firebaseapp.com",
  projectId: "devlinks-6c159",
  storageBucket: "devlinks-6c159.appspot.com",
  messagingSenderId: "51373071234",
  appId: "1:51373071234:web:2bb199e3e5bdf0818a4d9b",
  measurementId: "G-0C7240WPZJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getAuth(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};