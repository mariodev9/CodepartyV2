import { firestore } from "../../Client";
import {
  collection,
  query,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const addCode = ({ avatar, content, creatorId, userName, img }) => {
  try {
    const docRef = addDoc(collection(firestore, "codes"), {
      avatar,
      content,
      creatorId,
      userName,
      img,
      createdAt: Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const listenLatestCodes = async (callback) => {
  const q = query(collection(firestore, "codes"), orderBy("createdAt", "desc"));
  const querySnap = await getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const newCodes = docs.map(mapFromFirebaseToCodeObject);
    callback(newCodes);
  });
};

export const mapFromFirebaseToCodeObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const getUserPublications = async (userId, callback) => {
  const q = query(
    collection(firestore, "codes"),
    where("creatorId", "==", userId)
  );
  const querySnap = await getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const publications = docs.map(mapFromFirebaseToCodeObject);
    callback(publications);
  });
};
