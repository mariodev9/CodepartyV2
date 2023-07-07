import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../Client";

// Crea un chat y retorna su ID
export const createChat = async (data) => {
  try {
    const docRef = await addDoc(collection(firestore, "chats"), data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Obtiene todos los chats
export const getAllChats = async (callback, userName, userId) => {
  const chatsCollectionRef = collection(firestore, "chats");
  const q = query(
    chatsCollectionRef,
    where("members", "array-contains", {
      name: userName,
      id: userId,
    })
  );
  const querySnapshot = await getDocs(q);

  onSnapshot(q, (querySnapshot) => {
    const { docs } = querySnapshot;
    const chats = docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return {
        ...data,
        id,
      };
    });
    callback(chats);
  });
};

// Busca un chat y retorna su ID en caso de que existe
// parametros: 2 userId
// TODO BUSCAR COMO OBJETOS COMO EN GET ALL CHATS
export const searchChat = async (myUser, otherUser) => {
  try {
    const chatRef = collection(firestore, "chats");

    // Consultas para los 2 valores
    const query1 = query(
      chatRef,
      where("members", "array-contains", {
        name: myUser.name,
        id: myUser.id,
      })
    );
    const query2 = query(
      chatRef,
      where("members", "array-contains", {
        name: otherUser.name,
        id: otherUser.id,
      })
    );

    const [snapshot1, snapshot2] = await Promise.all([
      getDocs(query1),
      getDocs(query2),
    ]);

    const documents = snapshot1.docs.filter((doc1) =>
      snapshot2.docs.some((doc2) => doc2.id === doc1.id)
    );

    let existsChat;
    if (documents.length === 0) {
      existsChat = false;
    } else {
      // Iterar sobre los documentos obtenidos
      documents.forEach((doc) => {
        existsChat = doc.id;
      });
    }

    return existsChat;
  } catch (error) {}
};

// Obtiene los mensajes de un chat a partir de un ID
export const getMessagesFromChat = async (chatId, callback) => {
  const q = query(
    collection(firestore, "chats", `${chatId}`, "messages"),
    orderBy("createdAt", "asc")
  );

  const querySnapshot = await getDocs(q);

  onSnapshot(q, (querySnapshot) => {
    const { docs } = querySnapshot;
    const messages = docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return {
        ...data,
        id,
      };
    });
    callback(messages);
  });
};

// Envia un mensaje al chatId proporcionado
export const sendMessage = async (messageData, chatId) => {
  try {
    const docRef = addDoc(
      collection(firestore, "chats", chatId, "messages"),
      messageData
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getChat = async (chatId, setChatData) => {
  const userProfileRef = doc(firestore, "chats", `${chatId}`);

  onSnapshot(userProfileRef, (docSnap) => {
    if (docSnap.exists()) {
      const id = docSnap.id;
      const chatData = docSnap.data();
      const chatDataWithId = {
        ...chatData,
        id,
      };
      setChatData(chatDataWithId);
    } else {
      setChatData(false);
    }
  });
};
