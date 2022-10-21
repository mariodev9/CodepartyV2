import { firestore, storage } from "../../Client";

import {
  collection,
  query,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
