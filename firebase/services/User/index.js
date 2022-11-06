import { auth, firebaseConfig, firestore } from "../../Client";
import {
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const sessionChange = (onChange) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user);
      onChange(normalizedUser);
    } else {
      onChange(null);
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

export const createProfile = (userId, profileData) => {
  setDoc(doc(firestore, "users", `${userId}`), profileData);
};

// Busca un Perfil de usuario, si existe da undefined, si no existe devuelve la data del user
export const getProfile = async (userId, setUserProfileData) => {
  const userProfileRef = doc(firestore, "users", userId);
  const docSnap = await getDoc(userProfileRef);

  if (docSnap.exists()) {
    setUserProfileData(docSnap.data());
  } else {
    // console.log("No such document!");
    setUserProfileData(false);
  }
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
