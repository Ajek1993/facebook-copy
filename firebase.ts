import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "facebook-copy-5f968.firebaseapp.com",
  projectId: "facebook-copy-5f968",
  storageBucket: "facebook-copy-5f968.appspot.com",
  messagingSenderId: "737362192199",
  appId: "1:737362192199:web:7898c2ce356029f77cce62",
  measurementId: "G-SDKFXCVGFB",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
