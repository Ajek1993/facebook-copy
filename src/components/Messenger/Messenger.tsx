"use client";

import React from "react";
import Image from "next/image";
import { useChatSetting } from "@/providers/ChatProvider";
import { useFirebase } from "@/providers/FirebaseProvider";
import { CircularProgress } from "@nextui-org/react";

export default function Messenger() {
  const {
    setChatAIOpen,
    setChatUserOpen,
    setChatAIMinimize,
    setChatUserMinimize,
    setChatUserData,
    setMessengerOpen,
  } = useChatSetting();
  const { users } = useFirebase();

  const handleClickAI = (): void => {
    setChatAIOpen((prev: boolean) => !prev);
    setMessengerOpen((prev: boolean) => !prev);
    setChatAIMinimize(false);
  };

  const handleClickUser = (
    name: string,
    lastname: string,
    picture: string
  ): void => {
    setChatUserOpen((prev: boolean) => !prev);
    setMessengerOpen((prev: boolean) => !prev);
    setChatUserMinimize(false);
    setChatUserData({ name, lastname, picture });
  };

  return (
    <div>
      {!users && (
        <div className="flex items-center justify-center my-10">
          <CircularProgress size="lg" aria-label="Loading..." />
        </div>
      )}
      {users && (
        <ul>
          <li
            className="flex items-center py-2 px-2 gap-3 hover:bg-darkGrey cursor-pointer rounded-md"
            onClick={() => handleClickAI()}
          >
            <Image
              src="https://picsum.photos/67/67"
              width={35}
              height={35}
              alt="userPhoto"
              className="rounded-full"
            />
            <p>John Smith</p>
          </li>
          {users.map((user: Person, id: number) => {
            return (
              <li
                key={id}
                className="flex items-center py-2 px-2 gap-3 hover:bg-darkGrey cursor-pointer rounded-md"
                onClick={() =>
                  handleClickUser(user.name, user.lastname, user.picture)
                }
              >
                <Image
                  src={user.picture}
                  width={35}
                  height={35}
                  alt="userPhoto"
                  className="rounded-full h-[35px] w-[35px]"
                />
                <p>
                  {user.name} {user.lastname}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
