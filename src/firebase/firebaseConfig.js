import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPSCygESWWlUFoqKuNMzIqrYsvrpz02HM",
  authDomain: "auth-d2a11.firebaseapp.com",
  projectId: "auth-d2a11",
  storageBucket: "auth-d2a11.appspot.com",
  messagingSenderId: "1024829446811",
  appId: "1:1024829446811:web:63be88ad57cdbd3504043e",
  measurementId: "G-4VBF5MB9Y0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setAuth, setUser) => {
  try {
    const result = await signInWithPopup(auth, provider);
    setAuth(true);
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
    localStorage.setItem("auth-Status", true);
  } catch (err) {
    setAuth(false);
    localStorage.setItem("user", []);
    localStorage.setItem("auth-Status", false);
    setUser([]);
  }
};

export const signOutWithGoogle = (setAuth, setUser) => {
  signOut(auth)
    .then(() => {
      setAuth(false);
      setUser([]);
      localStorage.clear();
    })
    .catch((error) => {
      console.log(error);
    });
};
