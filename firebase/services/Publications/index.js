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
  deleteDoc,
  doc,
  getDoc,
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

export const deleteCode = async (publicationId) => {
  try {
    await deleteDoc(doc(firestore, "codes", publicationId));
  } catch (error) {
    console.error("Error delete document: ", error);
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

export const getPublication = async (publicationId, callback) => {
  const docRef = doc(firestore, "codes", `${publicationId}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const id = docSnap.id;

    const publicationData = {
      ...data,
      id,
    };

    callback(publicationData);
  } else {
    callback(null);
  }
};

export const getPublicationsWithParams = async (searchParam) => {
  try {
    const q = query(
      collection(firestore, "codes"),
      where("content", ">=", searchParam.toLowerCase()),
      where("content", "<=", searchParam.toLowerCase() + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    const results = [];

    querySnapshot.forEach((doc) => {
      const publicationData = doc.data();
      const { createdAt } = publicationData;

      const id = doc.id;

      const data = {
        ...publicationData,
        id,
        createdAt: +createdAt.toDate(),
      };

      results.push(data);
    });

    return results;
  } catch (error) {
    console.error("Error al buscar publicaciones dado un parametro:", error);
  }
};
