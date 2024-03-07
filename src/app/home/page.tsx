"use client";
import React from "react";
import { useChatSetting } from "@/providers/ChatProvider";
import { useUser } from "@/providers/UserProvider";
import { useFirebase } from "@/providers/FirebaseProvider.tsx";
import AddPost from "@/components/AddPost/AddPost";
import Chat from "@/components/Chat/Chat";
import Posts from "@/components/Posts/Posts";
import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";
import PrivateRoute from "@/components/PrivateRoute";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const { chatOpen } = useChatSetting();
  const { user, setNewUser, newUser } = useUser();
  const { addUser } = useFirebase();

  if (user && newUser) {
    addUser({ name: newUser.name, surname: newUser.surname, userID: user.uid });
    setNewUser(null);
  }
  return (
    <>
      <PrivateRoute>
        <Navbar />
        <main className="flex justify-center relative mx-auto">
          <LeftSideBar />
          <div className="w-[300px] hidden xl:block"></div>
          <section className="max-w-[800px] min-w-[350px] relative mt-2">
            <Shorts />
            <AddPost />
            <Posts />
          </section>
          <div className="w-[400px] hidden lg:block"></div>
          <RightSideBar />
          <div className="fixed bottom-0 right-10">{chatOpen && <Chat />}</div>
        </main>
      </PrivateRoute>
    </>
  );
}