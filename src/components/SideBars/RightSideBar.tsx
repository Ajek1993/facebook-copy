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
    <aside className="w-[350px] min-w-[250px] m-2 pr-3">
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Your sites and profiles"} />
        <div className="h-[30px] text-lightGrey hover:text-accent_blue cursor-pointer">
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </div>
      </div>
      <div className="w-full h-0.5 my-1 bg-darkGrey"></div>
      <div className="mt-4">
        <Heading title={"Birthdays"} />
        <div className="flex items-center gap-4 px-2">
          <div className="h-[50px] text-accent_blue flex justify-center items-center">
            <FontAwesomeIcon icon={faGift} size="xl" />
          </div>
          <p>John Smith has birthday today</p>
        </div>
      </div>
      <div className="w-full h-0.5 my-1 bg-darkGrey"></div>
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Contacts"} />
        <div className="h-[30px] flex gap-4 text-lightGrey ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="hover:text-accent_blue cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            className="hover:text-accent_blue cursor-pointer"
          />
        </div>
      </div>
      <ul>
        {persons.map((person, id) => (
          <li
            key={id}
            className="flex items-center py-3 gap-3 hover:bg-lightGrey"
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
    </aside>
  );
}
