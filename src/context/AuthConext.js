import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { verifyTokenGoogle } from "../helper/loginAPI";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [checkLogin, setCheckLogin] = useState(true);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        sessionStorage.setItem("user", JSON.stringify(result.user));
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const tokenPromise = currentUser.getIdToken();
        tokenPromise.then((token) => {
          if (!checkLogin) {
            return;
          }
          setCheckLogin(false);
          const data = verifyTokenGoogle(token);
          console.log(token, 123);
          data
            .then((data) => {
              setCheckLogin(true);
            })
            .catch((error) => {
              setCheckLogin(true);
              signOut(auth);
            });
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
