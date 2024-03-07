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

type UserData = {
  name: string;
  surname: string;
  uid: string;
};

const addUser = async (user: UserData) => {
  try {
    await addDoc(collection(db, "users"), user);
  } catch (err) {
    console.log(err);
  }
};

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

      const newPosts: any[] = [];
      querySnapshotPosts.forEach((post) => {
        const postInfo = post.data();
        postInfo["createdAt"] = postInfo["createdAt"].toDate();
        newPosts.push(postInfo);
      });

      // console.log(newPosts);
      setPosts((prev): any => {
        return newPosts.sort((a, b) => +b.createdAt - +a.createdAt);
      });
    };
    get();
  }, []);

  return (
    <FirebaseContext.Provider value={{ addPost, posts, setPosts, addUser }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
