"use client";
import React, { createContext, useContext, useState } from "react";
import { app } from "../../firebase.ts";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

const UserContext = createContext<any>({} as any);

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [actualUser, setActualUser] = useState(null);

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser((prev): any => user);
    } else {
      setUser((prev): any => null);
    }
  });

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // alert("Wylogowano pomyślnie");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        newUser,
        setNewUser,
        handleLogout,
        setActualUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
