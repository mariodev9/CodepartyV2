import { firestore } from "../../Client";
import {
  collection,
  query,
  setDoc,
  doc,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  where,
  getDocs,
} from "firebase/firestore";
// Saves

// Se PUSHEA en el array "SAVES" el id usuario
export const savePublication = async (codeId, userOnSession) => {
  try {
    const publicationRef = doc(firestore, "codes", codeId);
    await updateDoc(publicationRef, {
      saves: arrayUnion(`${userOnSession}`),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Se BORRA el id usuario en el array "SAVES"
export const unsavedPublication = async (codeId, userOnSession) => {
  const publicationRef = doc(firestore, "codes", codeId);

  await updateDoc(publicationRef, {
    saves: arrayRemove(`${userOnSession}`),
  });
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
