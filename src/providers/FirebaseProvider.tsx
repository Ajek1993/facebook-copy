"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";

const FirebaseContext = createContext<any>({} as any);

type UserData = {
  name: string;
  surname: string;
  userID: string;
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

const addLike = async (postID: string, userID: string) => {
  try {
    const postRef = doc(db, "posts", postID);
    await updateDoc(postRef, { whoLikes: arrayUnion(userID) });
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (postID: string) => {
  try {
    await deleteDoc(doc(db, "posts", postID));
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

      setPosts((prev): any => {
        return newPosts.sort((a, b) => +b.createdAt - +a.createdAt);
      });
    };
    get();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{ addPost, deletePost, posts, setPosts, addUser, addLike }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
