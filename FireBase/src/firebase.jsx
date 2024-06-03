import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoXq9rUaX73UoGx-7h1LLYpDd3TS5ENwo",
  authDomain: "log-app-61ac7.firebaseapp.com",
  projectId: "log-app-61ac7",
  storageBucket: "log-app-61ac7.appspot.com",
  messagingSenderId: "861714880556",
  appId: "1:861714880556:web:bf081833f77e3a185f1989",
};

export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
