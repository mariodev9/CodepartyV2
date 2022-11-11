import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../Client";

export const GetAllUserSaves = async (userId, callback) => {
  const q = query(
    collection(firestore, "codes"),
    where("saves", "array-contains", `${userId}`)
  );

  const querySnapshot = await getDocs(q);
  let listSaves = [];
  querySnapshot.forEach((doc) => {
    const dataSave = doc.data();
    listSaves.push(dataSave);
  });
  callback(listSaves);
};
