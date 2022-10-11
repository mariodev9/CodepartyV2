import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  setDoc,
  Timestamp,
  addDoc,
  doc,
  orderBy,
  onSnapshot,
  deleteDoc,
  where,
  getDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ360zfgLsQ9Bb_72jJBAzSIARUAOnQkc",
  authDomain: "codepartyv2.firebaseapp.com",
  projectId: "codepartyv2",
  storageBucket: "codepartyv2.appspot.com",
  messagingSenderId: "1038312374401",
  appId: "1:1038312374401:web:223503ba698f8de2500d80",
  measurementId: "G-TZ3YP23X4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth();
export const firestore = getFirestore(app);
const storage = getStorage(app);

// USER -------------------------

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

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, uid } = user;
  return {
    name: displayName,
    avatar: photoURL,
    userId: uid,
  };
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

// CODES --------------------------

export const addCode = ({ avatar, content, creatorId, userName, img }) => {
  try {
    const docRef = addDoc(collection(firestore, "codes"), {
      avatar,
      content,
      creatorId,
      userName,
      img,
      createdAt: Timestamp.fromDate(new Date()),
      // likesCount: 0,
      // sharedCount: 0,
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

const mapFromFirebaseToCodeObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

// STORIES -----------------------------------------

const mapFromFirebaseToStoryObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const uploadImage = (file, onChange) => {
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      // setPer(progress);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL, "TRA ELA URL?");
        onChange(downloadURL);
      });
    }
  );
};

export const addStory = ({ creatorId, avatar, userName, img }) => {
  try {
    const docRef = addDoc(collection(firestore, "stories"), {
      creatorId,
      avatar,
      userName,
      img,
      createdAt: Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const listenLatestStories = async (
  saveAllStories,
  saveUserStories,
  userId
) => {
  const q = query(
    collection(firestore, "stories"),
    orderBy("createdAt", "desc")
  );
  const querySnap = await getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const newStories = docs.map(mapFromFirebaseToStoryObject);

    // Filter last 24hours stories
    const last24HoursStories = newStories.filter(Last24Hour);

    // Group Stories by userId
    let allStories = groupStoriesByUser(last24HoursStories);

    // Filter Stories from User
    let onlyUserStories = allStories.filter(
      (story) => story.creatorId === userId
    );

    // Filter Stories others users
    let allOtherStories = allStories.filter(
      (story) => story.creatorId !== userId
    );

    // Save Stories in state
    saveUserStories(onlyUserStories);
    saveAllStories(allOtherStories);
  });
};

const Last24Hour = (item) => {
  const today = new Date().getTime();
  let diff = today - item.createdAt;
  let diffHours = diff / (1000 * 60 * 60 * 24);

  if (diffHours < 1) {
    return item;
  }
};

const groupStoriesByUser = (array) => {
  // Esta funcion agrupa las historias por usuario en un objeto asi

  // userStories = [
  // {
  //   userId: "1"
  //   userAvatar: "1"
  //   Stories: [
  //     story1
  //     story2
  //   ],
  // },
  //  {
  //   userId: "2"
  //   userAvatar: "2"
  //   Stories: [
  //     story1
  //     story2
  //   ],
  // },
  // ]

  let allUserStories = [];

  for (let i = 0; i < array.length; i++) {
    let story = array[i];

    let currentUserId;
    let userStories = {};

    if (currentUserId !== story.creatorId) {
      currentUserId = story.creatorId;

      userStories.creatorId = currentUserId;
      userStories.avatar = story.avatar;
      userStories.stories = array.filter(
        (item) => item.creatorId === currentUserId
      );

      // Refactor ----
      if (allUserStories.length === 0) {
        allUserStories.push(userStories);
      } else {
        let result = allUserStories.filter(
          (story) => story.creatorId !== userStories.creatorId
        );
        if (result.length === allUserStories.length) {
          allUserStories.push(userStories);
        }
      }
      // Refactor ----
    }
  }
  return allUserStories;
};

// COMENTARIOS -----------
export const addComment = ({ codeId, avatar, content, userId, userName }) => {
  try {
    const docRef = addDoc(
      collection(firestore, "codes", `${codeId}`, "comments"),
      {
        avatar,
        content,
        userId,
        userName,
        createdAt: Timestamp.fromDate(new Date()),
      }
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const listenLatestComments = async (callback, codeId) => {
  const q = query(
    collection(firestore, "codes", `${codeId}`, "comments"),
    orderBy("createdAt")
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

// INTERACTIONS

export const savePublication = async (codeId, userOnSession, data) => {
  try {
    await setDoc(
      doc(firestore, "codes", `${codeId}`, "saves", `${userOnSession}`),
      {}
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const unsavedPublication = async (codeId, userOnSession) => {
  await deleteDoc(
    doc(firestore, "codes", `${codeId}`, "saves", `${userOnSession}`)
  );
};

export const setIfPublicationIsSave = async (
  codeId,
  userOnSession,
  callback
) => {
  const saveRef = doc(
    firestore,
    "codes",
    `${codeId}`,
    "saves",
    `${userOnSession}`
  );
  const docSnap = await getDoc(saveRef);

  if (docSnap.exists()) {
    callback(true);
  } else {
    callback(false);
  }
};

export const setIfPublicationIsLiked = async (
  codeId,
  userOnSession,
  callback,
  setLikesCount
) => {
  const q = query(collection(firestore, "codes", `${codeId}`, "likes"));

  const querySnapshot = await getDocs(q);

  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    setLikesCount(docs.length);
  });

  querySnapshot.forEach((doc) => {
    if (doc.id === userOnSession) {
      return callback(true);
    } else {
      callback(false);
    }
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
