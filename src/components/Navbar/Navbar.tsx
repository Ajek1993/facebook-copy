"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilm,
  faStore,
  faUsers,
  faGamepad,
  faEllipsis,
  faBell,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { usePathname, useRouter } from "next/navigation";

interface Button {
  path: string;
  font: regular.IconDefinition;
}

export default function Navbar() {
  const path = usePathname();

  console.log(path);

  const NAV_BUTTONS: Button[] = [
    { path: "/", font: faHouse },
    { path: "/movies", font: faFilm },
    { path: "/marketplace", font: faStore },
    { path: "/groups", font: faUsers },
    { path: "/games", font: faGamepad },
  ];

  const CIRCULAR_BUTTONS: Button[] = [
    { path: "Menu", font: faEllipsis },
    { path: "Messenger", font: faFacebookMessenger },
    { path: "Notifications", font: faBell },
    { path: "Account", font: faUser },
  ];
  return (
    <header className="h-[60px] flex items-center justify-between p-2 bg-secondary_darkGrey">
      <div className="h-full flex items-center gap-1">
        <div>
          <Link href={"/"}>
            <div className="h-[50px] flex items-center">
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-3/4 rounded-full text-accent_blue"
              />
            </div>
          </Link>
        </div>
        <div className="h-full flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-1/3 relative left-8"
          />
          <input
            className="rounded-full placeholder:italic bg-darkGrey px-4 pl-10 py-2 outline-none"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <nav className="flex grow justify-center">
        {NAV_BUTTONS.map((button, id) => (
          <Link href={button.path} key={id}>
            <div className="h-[50px] flex items-center px-16 py-2 hover:bg-secondary_darkGrey rounded-xl">
              <FontAwesomeIcon
                icon={button.font}
                className={`h-3/4 ${
                  path === button.path ? "text-accent_blue" : "text-darkGrey"
                }`}
              />
            </div>
          </Link>
        ))}
      </nav>
      <div>
        <ul className="flex gap-2">
          {CIRCULAR_BUTTONS.map((button, id) => (
            <li key={id}>
              <div className="h-[45px] w-[45px] flex items-center justify-center p-2 bg-darkGrey hover:bg-secondary_darkGrey rounded-full cursor-pointer">
                <FontAwesomeIcon
                  icon={button.font}
                  className="h-3/4 text-lightGrey "
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
