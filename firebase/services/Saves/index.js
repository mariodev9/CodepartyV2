import { firestore } from "../../Client";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { mapFromFirebaseToCodeObject } from "../Publications";

export const GetAllUserSaves = async (userId, callback) => {
  const q = query(
    collection(firestore, "codes"),
    where("saves", "array-contains", `${userId}`)
  );

  const querySnapshot = await getDocs(q);

  onSnapshot(q, (querySnapshot) => {
    const { docs } = querySnapshot;
    const newSaves = docs.map(mapFromFirebaseToCodeObject);
    callback(newSaves);
  });
};
