import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  Timestamp,
  addDoc,
  doc,
  orderBy,
  onSnapshot,
  deleteDoc,
  where,
  getDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAJ360zfgLsQ9Bb_72jJBAzSIARUAOnQkc",
  authDomain: "codepartyv2.firebaseapp.com",
  projectId: "codepartyv2",
  storageBucket: "codepartyv2.appspot.com",
  messagingSenderId: "1038312374401",
  appId: "1:1038312374401:web:223503ba698f8de2500d80",
  measurementId: "G-TZ3YP23X4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
