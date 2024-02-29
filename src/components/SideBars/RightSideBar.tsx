import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGift,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { persons } from "../../data/persons.js";

export default function RightSideBar() {
  return (
    <aside className="w-[350px] h-screen min-w-[250px] hover:overflow-y-scroll overflow-hidden pr-[17px] hover:pr-0">
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Your sites and profiles"} />
        <div className="h-[30px] text-lightGrey hover:text-accent_blue flex justify-center items-center cursor-pointer pr-4">
          <FontAwesomeIcon icon={faEllipsis} className="h-3/5" />
        </div>
      </div>
      <div className="w-full h-0.5 my-1 bg-darkGrey"></div>
      <div className="mt-4">
        <Heading title={"Birthdays"} />
        <div className="flex items-center gap-4 px-2">
          <div className="h-[50px] text-accent_blue flex justify-center items-center">
            <FontAwesomeIcon icon={faGift} className="h-3/5" />
          </div>
          <p>John Smith has birthday today</p>
        </div>
      </div>
      <div className="w-full h-0.5 my-1 bg-darkGrey"></div>
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Contacts"} />
        <div className="h-[30px] flex items-center gap-4 text-lightGrey pr-4">
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
      <ul>
        {persons.map((person, id) => (
          <li
            key={id}
            className="flex items-center py-3 px-2 gap-3 hover:bg-darkGrey cursor-pointer rounded-md"
          >
            <Image
              src={"https://picsum.photos/50/50"}
              width={35}
              height={35}
              alt="userPhoto"
              className="rounded-full"
            />
            <p>
              {person.name} {person.lastname}
            </p>
          </li>
        ))}
      </ul>
      <div className="w-full h-0.5 my-1 bg-darkGrey"></div>
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Group coversations"} />
      </div>
    </aside>
  );
}
