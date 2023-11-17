import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBXuLMR3kp8hVzxGlNMNWaI3O3fRN470N8",
    authDomain: "greenie-66723.firebaseapp.com",
    projectId: "greenie-66723",
    storageBucket: "greenie-66723.appspot.com",
    messagingSenderId: "966065862363",
    appId: "1:966065862363:web:2706651f3cd5d55a76fefe",
    measurementId: "G-FKBBYSFDJ0"
  };

  const app = initializeApp((firebaseConfig));

  export const db = getFirestore(app);