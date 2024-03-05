"use client";
import React, { useState } from "react";

import AddPost from "@/components/AddPost/AddPost";
import Chat from "@/components/Chat";
import Posts from "@/components/Posts/Posts";
import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";

export default function App() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <main className="flex justify-center relative mx-auto">
        <LeftSideBar />
        <div className="w-[300px] hidden xl:block"></div>
        <section className="max-w-[800px] min-w-[350px] relative mt-2">
          <Shorts />
          <AddPost />
          <Posts />
        </section>
        <div className="w-[400px] hidden lg:block"></div>
        <RightSideBar setOpenChat={setOpenChat} />
        <div className="fixed bottom-0 right-10">{openChat && <Chat />}</div>
      </main>
    </>
  );
}
