import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBfRA3CASRuEObouX9YsRWKRR--jn8EO9w",
  authDomain: "tairq-smtc-v2.firebaseapp.com",
  projectId: "tairq-smtc-v2",
  storageBucket: "tairq-smtc-v2.appspot.com",
  messagingSenderId: "691854057029",
  appId: "1:691854057029:web:02d2c13dba9b4a0bfe8d2c",
  measurementId: "G-5EK8NFJ0SB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore();
