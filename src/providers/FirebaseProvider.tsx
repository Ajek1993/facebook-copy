"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";

const FirebaseContext = createContext<any>({} as any);

type UserData = {
  name: string;
  lastname: string;
  userID: string;
  picture: string;
};

export default function FirebasaeProvider({ children }: any) {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [newPostID, setNewPostID] = useState("");

  useEffect(() => {
    const get = async () => {
      const postsCollection = collection(db, "posts");
      const usersCollection = collection(db, "users");
      const querySnapshotPosts = await getDocs(postsCollection);
      const querySnapshotUsers = await getDocs(usersCollection);

      const newPosts: any[] = [];
      querySnapshotPosts.forEach((post) => {
        const postInfo = post.data();
        postInfo["createdAt"] = postInfo["createdAt"].toDate();
        newPosts.push(postInfo);
      });

      const newUsers: any[] = [];
      querySnapshotUsers.forEach((user) => {
        const userInfo = user.data();
        newUsers.push(userInfo);
      });

      setUsers((prev): any => newUsers);

      setPosts((prev): any => {
        return newPosts.sort((a, b) => +b.createdAt - +a.createdAt);
      });
    };
    get();
  }, []);

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

      setNewPostID(docRef.id);
    } catch (err) {
      console.log(err);
    }
  };

  const addLike = async (postID: string, userID: string) => {
    try {
      const postRef = doc(db, "posts", postID || newPostID);
      await updateDoc(postRef, {
        likes: increment(1),
        whoLikes: arrayUnion(userID),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLike = async (postID: string, userID: string) => {
    try {
      const postRef = doc(db, "posts", postID || newPostID);
      await updateDoc(postRef, {
        likes: increment(-1),
        whoLikes: arrayRemove(userID),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (postID: string) => {
    try {
      await deleteDoc(doc(db, "posts", postID || newPostID));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        addPost,
        deletePost,
        posts,
        setPosts,
        addUser,
        addLike,
        deleteLike,
        users,
        setUsers,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
