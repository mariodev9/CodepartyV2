import { useState } from "react";
import { useRouter } from "next/router";

import { auth, firebaseConfig, firestore } from "../../Client";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

// Busca un Perfil de usuario, si existe guarda la data en un callback, si no existe devuelve false
export const getProfile = async (userId, setUserProfileData) => {
  const userProfileRef = doc(firestore, "users", `${userId}`);

  onSnapshot(userProfileRef, (docSnap) => {
    if (docSnap.exists()) {
      setUserProfileData(docSnap.data());
    } else {
      setUserProfileData(false);
    }
  });
};

export const sessionChange = (saveUserData) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user);
      saveUserData(normalizedUser);
    } else {
      saveUserData(null);
    }
  });
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, uid } = user;
  return {
    name: displayName,
    avatar: photoURL,
    userId: uid,
  };
};

export const loginWithGitHub = async () => {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  return signInWithPopup(auth, githubProvider);
};

export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters(firebaseConfig);
  return signInWithPopup(auth, googleProvider);
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

//PROFILES
export const createProfile = (userId, profileData) => {
  setDoc(doc(firestore, "users", `${userId}`), profileData);
};

export const updateProfile = async (userId, Data) => {
  const userProfile = doc(firestore, "users", userId);
  await updateDoc(userProfile, Data);
};
