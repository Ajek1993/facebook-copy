"use client";

import React, { createContext, useContext, useState } from "react";
import { db, app } from "../../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const FirebaseContext = createContext<any>({} as any);

const addPost = async (post: Post) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);

    await updateDoc(doc(db, "posts", docRef.id), {
      _id: docRef.id,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
};

export default function ChatProvider({ children }: any) {
  return (
    <FirebaseContext.Provider value={{ addPost }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
