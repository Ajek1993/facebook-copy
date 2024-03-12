"use client";

import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGift,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import GreySeparator from "../common/GreySeparator";
import { useChatSetting } from "@/providers/ChatProvider";
import { useFirebase } from "@/providers/FirebaseProvider";

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RightSideBar() {
  const { setChatOpen } = useChatSetting();
  const { users } = useFirebase();

  const handleClick = (): void => {
    setChatOpen((prev: boolean) => !prev);
  };

  return (
    <aside className="w-[350px] min-w-[250px] hidden lg:block overflow-y-scroll fixed right-0">
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Your sites and profiles"} />
        <div className="h-[30px] text-lightGrey hover:text-accent_blue flex justify-center items-center cursor-pointer relative">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="h-3/5 absolute right-2"
          />
        </div>
      </div>
      <GreySeparator />
      <div className="mt-4">
        <Heading title={"Birthdays"} />
        <div className="flex items-center gap-4 px-2">
          <div className="h-[50px] text-accent_blue flex justify-center items-center">
            <FontAwesomeIcon icon={faGift} className="h-3/5" />
          </div>
          <p>John Smith has birthday today</p>
        </div>
      </div>
      <GreySeparator />
      <div className="mt-4 flex justify-between items-center relative">
        <Heading title={"Contacts"} />
        <div className="h-[30px] flex items-center gap-4 text-lightGrey absolute right-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hover:text-accent_blue cursor-pointer h-3/5"
          />
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            className="hover:text-accent_blue cursor-pointer h-3/5"
          />
        </div>
      </div>
      {users && (
        <ul>
          <li
            className="flex items-center py-2 px-2 gap-3 hover:bg-darkGrey cursor-pointer rounded-md"
            onClick={() => handleClick()}
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
              >
                <Image
                  src={`https://picsum.photos/${randomInteger(
                    50,
                    70
                  )}/${randomInteger(50, 70)}`}
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
      <GreySeparator />
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Group coversations"} />
      </div>
    </aside>
  );
}
