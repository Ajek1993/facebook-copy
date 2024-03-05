"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { db, app } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

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

export default function FirebasaeProvider({ children }: any) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const get = async () => {
      const postsCollection = collection(db, "posts");
      const querySnapshotPosts = await getDocs(postsCollection);

      const newPosts = [];
      querySnapshotPosts.forEach((post) => {
        const postInfo = post.data();
        postInfo["createdAt"] = postInfo["createdAt"].toDate();
        newPosts.push(postInfo);
      });

      console.log(newPosts);
      setPosts(newPosts.sort((a, b) => +b.caption - +a.caption));
    };
    get();
  }, []);

  // useEffect(() => {
  //   setPosts((prev) => prev.sort((a, b) => +b.caption - +a.caption));
  // }, [posts]);

  return (
    <FirebaseContext.Provider value={{ addPost, posts, setPosts }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
