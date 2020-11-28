import { createContext, useEffect, useState } from "react";
import firebase from "../firebase/firebase.utils";

export const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setAuthentcated] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
}

export default AuthContextProvider;
