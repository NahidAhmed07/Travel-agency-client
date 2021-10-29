import { useEffect, useState } from "react";
import initializationFirebase from "../pages/Login/Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

initializationFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth();

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unSubscribe;
  }, []);

  return {
    user,
    error,
    setError,
    setUser,
    googleLogin,
    githubLogin,
    isMenuOpen,
    isLoading,
    logOut,
    setIsLoading,
    setIsMenuOpen,
  };
};

export default useFirebase;
