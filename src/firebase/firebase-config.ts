import { firebaseConfig } from "./firebase-credentials";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.');
  } else {
    return firebaseConfig;
  }
}

const app = initializeApp(firebaseConfig);


export const firestore = getFirestore(app);
export const auth = getAuth(app);