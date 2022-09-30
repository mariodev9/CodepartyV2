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
const firestore = getFirestore(app);
const storage = getStorage(app);

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

export const addCode = ({ avatar, content, userId, userName, img }) => {
  try {
    const docRef = addDoc(collection(firestore, "codes"), {
      avatar,
      content,
      userId,
      userName,
      img,
      createdAt: Timestamp.fromDate(new Date()),
      likesCount: 0,
      sharedCount: 0,
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

// export const uploadImage = (file, onChange, setPer) => {
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

export const listenLatestStories = async (callback) => {
  const q = query(
    collection(firestore, "stories"),
    orderBy("createdAt", "desc")
  );
  const querySnap = await getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const newStories = docs.map(mapFromFirebaseToStoryObject);

    // Filter last 24hours stories
    const last24HoursStories = newStories.filter(FilterLast24HourStories);
    // Group Stories by userId
    let allUserStories = groupStoriesByUser(last24HoursStories);

    // Save All stories in state
    callback(allUserStories);
  });
};

const FilterLast24HourStories = (item) => {
  const today = new Date().getTime();
  let diff = today - item.createdAt;
  let diffHours = diff / (1000 * 60 * 60 * 24);

  if (diffHours < 1) {
    return item;
  }
};

const groupStoriesByUser = (array) => {
  let allUserStories = [];

  for (let i = 0; i < array.length; i++) {
    let story = array[i];

    let currentUserId;
    let userStories = {};

    // userStories = {
    //   userId: ""
    //   userAvatar
    //   Stories: [
    //     story1
    //     story2
    //   ]
    // }

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
