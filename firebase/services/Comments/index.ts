import { firestore } from "../../Client";
import {
  collection,
  query,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

interface AddCommentProps {
  codeId: string
  avatar: string
  content: string
  name:string
}

export const addComment = ({ codeId, avatar, content, name }:AddCommentProps) => {
  try {
    const docRef = addDoc(
      collection(firestore, "codes", `${codeId}`, "comments"),
      {
        avatar,
        content,
        name,
        createdAt: Timestamp.fromDate(new Date()),
      }
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const listenLatestComments = async (callback:any, codeId:string) => {
  const q = query(
    collection(firestore, "codes", `${codeId}`, "comments"),
    orderBy("createdAt", "desc")
  );
  const querySnap = await getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const allComments = docs.map(mapFromFirebaseToCommentObject);
    callback(allComments);
  });
};

const mapFromFirebaseToCommentObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;
  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};
