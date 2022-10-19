import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/Client";
import useUser from "../../../hooks/useUser";

export default async (request, response) => {
  const { query } = request;
  const { id } = query;

  const docRef = doc(firestore, "codes", `${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const id = docSnap.id;

    response.status(200).json({
      ...data,
      id,
    });
  } else {
    // doc.data() will be undefined in this case
    response.status(404).json({ message: `No existe` });
  }
};
