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

// Admite solo un usestate
// hacer que setRegisterState sea = {
//  message: "de error o bien",
// error: false o true
// succesfull: false
// }

// if registerState.error es true mostrar
// if suecces full true mostrar o no se
export const Register = async (data, setError, succesfullCreated) => {
  const { email, password, username } = data;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      succesfullCreated();
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setError("Este email esta en uso");
      } else if (error.code === "auth/invalid-email") {
        setError("Este email no es valido");
      } else if (error.code === "auth/operation-not-allowed") {
        setError("Operation not allowed.");
      } else {
        setError(error.code);
      }
      setTimeout(() => {
        setError("");
      }, 3000);
    });

  // Register user in firestore
  //   if (userData) {
  //     const docuRef = doc(firestore, `users/${userData.user.uid}`);
  //     setDoc(docuRef, { email: email, username: username });
  //   }
};
