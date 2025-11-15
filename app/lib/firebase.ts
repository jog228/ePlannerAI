// firebase.ts

// Import the Firebase libraries you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// If you plan to use Firestore or Auth, uncomment these:
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpi6nS0MwDI4xhqJ-kOHIT1_BTUlqW5lc",
  authDomain: "eplannerai.firebaseapp.com",
  projectId: "eplannerai",
  storageBucket: "eplannerai.firebasestorage.app",
  messagingSenderId: "681019894200",
  appId: "1:681019894200:web:49396adcebcfa9a159074d",
  measurementId: "G-9LP6R5LZ81"
};

// Initialize Firebase (only once)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optional analytics (only works in browser)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

// Export initialized services
export { app, analytics };
// export const db = getFirestore(app); // if using Firestore
// export const auth = getAuth(app);     // if using Auth