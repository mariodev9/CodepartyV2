import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Client";

export const Login = (data, callback) => {
  const { email, password } = data;
  if ((email, password)) {
    signInWithEmailAndPassword(auth, email, password)
      // .then(() => {
      //   window.location.replace("/Home");
      // })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            callback("Email/Contraseña incorrectos");
            break;
          case "auth/user-not-found":
            callback("Email/Contraseña incorrectos");
          default:
            callback("Hay un error, intente mas tarde");
        }

        setTimeout(() => {
          callback("");
        }, 3000);
      });
  }
};

export const Register = async (data, callback) => {
  const { email, password, username } = data;
  const userData = await createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        callback("The email is already in use");
      } else if (error.code === "auth/invalid-email") {
        callback("The email address is not valid.");
      } else if (error.code === "auth/operation-not-allowed") {
        console.log("Operation not allowed.");
        callback("Operation not allowed.");
      } else {
        console.log("error");
      }
      setTimeout(() => {
        callback("");
      }, 3000);
    });
  // Register user in firestore
  //   if (userData) {
  //     const docuRef = doc(firestore, `users/${userData.user.uid}`);
  //     setDoc(docuRef, { email: email, username: username });
  //   }
};
