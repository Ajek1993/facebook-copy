import React from "react";
import Heading from "../Heading";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faGift } from "@fortawesome/free-solid-svg-icons";

export default function RightSideBar() {
  return (
    <aside className="w-[350px] min-w-[250px] m-2 pr-3">
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Your sites and profiles"} />
        <div className="h-[30px] text-lightGrey">
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </div>
      </div>
      <div className="w-full h-0.5 my-2 bg-darkGrey"></div>
      <div className="mt-4">
        <Heading title={"Birthdays"} />
        <div className="flex items-center gap-4 px-2">
          <div className="h-[50px] text-accent_blue flex justify-center items-center">
            <FontAwesomeIcon icon={faGift} size="xl" />
          </div>
          <p>John Smith has birthday today</p>
        </div>
      </div>
      <div className="w-full h-0.5 my-2 bg-darkGrey"></div>
      <div className="mt-4 flex justify-between items-center">
        <Heading title={"Contacts"} />
        <div className="h-[30px] text-lightGrey">
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </aside>
  );
}
