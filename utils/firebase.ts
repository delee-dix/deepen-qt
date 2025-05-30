import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcgHiQgUHjBvIBJSO74pg2kSJpQlIep18",
  authDomain: "deepen-qt-test.firebaseapp.com",
  projectId: "deepen-qt-test",
  storageBucket: "deepen-qt-test.firebasestorage.app",
  messagingSenderId: "661690169876",
  appId: "1:661690169876:web:d8c7f486167df089840501",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
