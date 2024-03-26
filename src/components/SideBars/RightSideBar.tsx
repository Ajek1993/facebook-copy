"use client";

import React from "react";
import Heading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGift,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import GreySeparator from "../common/GreySeparator";
import Messenger from "../Messenger/Messenger";

export default function RightSideBar() {
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
      <Messenger />
      <GreySeparator />
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Group coversations"} />
      </div>
    </aside>
  );
}
