"use client";
import React, { useEffect, useState } from "react";
import { useChatSetting } from "@/providers/ChatProvider";
import { useUser } from "@/providers/UserProvider";
import { useFirebase } from "@/providers/FirebaseProvider.tsx";
import AddPost from "@/components/AddPost/AddPost";
import ChatAI from "@/components/Chat/ChatAI";
import ChatUser from "@/components/Chat/ChatUser";
import Posts from "@/components/Posts/Posts";
import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/Navbar/Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import Messenger from "@/components/Messenger/Messenger";

export default function Home() {
  const { chatAIOpen, chatUserOpen, messegerOpen } = useChatSetting();
  const { user, setNewUser, newUser, setActualUser } = useUser();
  const { addUser } = useFirebase();

  if (user && newUser) {
    addUser({
      name: newUser.name,
      lastname: newUser.lastname,
      userID: user.uid,
      picture: newUser.picture,
    });
    setNewUser(null);
  }

  useEffect(() => {
    const getUserData = async () => {
      const q = query(collection(db, "users"), where("userID", "==", user.uid));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setActualUser({
          name: doc.data().name,
          lastname: doc.data().lastname,
          userID: doc.data().userID,
          picture: doc.data().picture,
        });
      });
    };

    user && getUserData();
  }, [user, setActualUser]);

  return (
    <>
      <PrivateRoute>
        <Navbar />
        <main className="flex justify-center relative mx-auto">
          <LeftSideBar />
          <div className="w-[300px] hidden xl:block"></div>
          <section className="max-w-[800px] min-w-[350px] relative mt-2">
            <div className="lg:hidden">{messegerOpen && <Messenger />}</div>
            <Shorts />
            <AddPost />
            <Posts />
          </section>
          <div className="w-[400px] hidden lg:block"></div>
          <RightSideBar />
          <div className="fixed bottom-0 right-0 md:right-10 flex gap-2 items-end">
            {chatAIOpen && <ChatAI />}
            {chatUserOpen && <ChatUser />}
          </div>
        </main>
      </PrivateRoute>
    </>
  );
}
