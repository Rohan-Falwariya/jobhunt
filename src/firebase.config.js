// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDgKMgPIW_WES7n59L7GuDpChJpjCIKPc",
  authDomain: "online-job-portal-117b1.firebaseapp.com",
  projectId: "online-job-portal-117b1",
  storageBucket: "online-job-portal-117b1.appspot.com",
  messagingSenderId: "107023670414",
  appId: "1:107023670414:web:1c724578740f109cb57ddf",
  measurementId: "G-Y1KGD6J8YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};