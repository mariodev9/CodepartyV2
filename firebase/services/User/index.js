import { auth, firestore } from "../../Client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";

export const getAllProfiles = async (setUsers) => {
  const q = query(collection(firestore, "users"));

  const querySnapshot = await getDocs(q);

  onSnapshot(q, (querySnapshot) => {
    const { docs } = querySnapshot;
    const users = docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return {
        ...data,
        id,
      };
    });
    setUsers(users);
  });
};

// Busca un Perfil de usuario, si existe guarda la data en un callback, si no existe devuelve false
export const getProfile = async (userId, setUserProfileData) => {
  const userProfileRef = doc(firestore, "users", `${userId}`);

  onSnapshot(userProfileRef, (docSnap) => {
    if (docSnap.exists()) {
      const id = docSnap.id;
      const userData = docSnap.data();
      const userWithId = {
        ...userData,
        id,
      };
      setUserProfileData(userWithId);
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
