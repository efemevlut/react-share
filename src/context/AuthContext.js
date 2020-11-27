import { createContext, useEffect, useState } from "react";
import firebase from "../firebase/firebase.utils";

const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setAuthentcated] = useState(false);
  const [currenUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.firebaseAuth.onAuthStateChanged((user) => {
      console.log("user", user);
      setCurrentUser(user);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currenUser }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
}

export default AuthContextProvider;
