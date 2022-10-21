import { auth, firestore, storage } from "../../Client";

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

// Saves

export const savePublication = async (codeId, userOnSession, data) => {
  try {
    await setDoc(
      doc(firestore, "codes", `${codeId}`, "saves", `${userOnSession}`),
      {}
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const unsavedPublication = async (codeId, userOnSession) => {
  await deleteDoc(
    doc(firestore, "codes", `${codeId}`, "saves", `${userOnSession}`)
  );
};

export const setIfPublicationIsSave = async (
  codeId,
  userOnSession,
  callback
) => {
  const saveRef = doc(
    firestore,
    "codes",
    `${codeId}`,
    "saves",
    `${userOnSession}`
  );
  const docSnap = await getDoc(saveRef);

  if (docSnap.exists()) {
    callback(true);
  } else {
    callback(false);
  }
};

// Likes
export const setIfPublicationIsLiked = async (
  codeId,
  userOnSession,
  setIsLiked,
  setLikesCount
) => {
  const q = query(collection(firestore, "codes", `${codeId}`, "likes"));

  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    setLikesCount(docs.length);
    docs.map((doc) => {
      if (doc.id === userOnSession) {
        setIsLiked(true);
      }
    });
  });
};

export const likedPublication = async (codeId, userOnSession) => {
  try {
    await setDoc(
      doc(firestore, "codes", `${codeId}`, "likes", `${userOnSession}`),
      {}
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const unlikedPublication = async (codeId, userOnSession) => {
  await deleteDoc(
    doc(firestore, "codes", `${codeId}`, "likes", `${userOnSession}`)
  );
};
