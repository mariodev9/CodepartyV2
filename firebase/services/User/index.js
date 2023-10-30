import { auth, firestore } from "../../Client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  doc,
  where,
  collection,
} from "firebase/firestore";

// ------- AUTH
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

// ------- PROFILES
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
  try {
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
  } catch (error) {
    console.error("Error al buscar un perfil:", error);
  }
};

// Busca perfiles por el nombre dado un string
export const getProfiles = async (userName) => {
  try {
    const q = query(
      collection(firestore, "users"),
      where("name", "==", `${userName}`)
    );

    const querySnapshot = await getDocs(q);

    const results = [];

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const id = doc.id;

      const data = {
        ...userData,
        id,
      };

      results.push(data);
    });

    return results;
  } catch (error) {
    console.error("Error al buscar perfiles:", error);
  }
};

export const createProfile = (userId, profileData) => {
  try {
    setDoc(doc(firestore, "users", `${userId}`), profileData);
  } catch (error) {
    console.error("Error al crear un perfil:", error);
  }
};

export const updateProfile = async (userId, Data) => {
  try {
    const userProfile = doc(firestore, "users", userId);
    await updateDoc(userProfile, Data);
  } catch (error) {
    console.error("Error al actualizar un perfil:", error);
  }
};
