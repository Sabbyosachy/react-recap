import React, { useState } from "react";
import firebaseApp from "../Firebase/Firebaseinit";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const Login = () => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signInOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user.email ? (
        <button onClick={signInOut}>SignOut</button>
      ) : (
        <button onClick={googleSignIn}>Google</button>
      )}
      <h3>{user.displayName}</h3>
    </div>
  );
};

export default Login;
