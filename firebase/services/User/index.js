import { auth, firestore } from "../../Client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

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
  // ESTO TRAE SOLO EL USERID
  onAuthStateChanged(auth, (user) => {
    if (user) {
      saveUserData(user.uid);
    } else {
      saveUserData(null);
    }
  });
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
