"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import CircularButton from "./buttons/CircularButton";
import NavigationButton from "./buttons/NavigationButton";

interface Button {
  path: string;
  font: regular.IconDefinition;
}

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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="h-[60px] flex items-center justify-between p-2 bg-secondary_darkGrey">
        <div className="h-full flex items-center justify-center gap-1">
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
          <div className="h-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-1/3 relative left-7 lg:left-8"
            />
            <input
              className="rounded-full placeholder:italic bg-darkGrey px-4 pl-10 py-2 max-w-[210px] outline-none hidden lg:inline-block"
              placeholder="Search Facebook"
              type="text"
            />
            <input
              className="rounded-full w-10 h-10 bg-darkGrey px-4 p-2 outline-none inline-block lg:hidden"
              type="text"
            />
          </div>
          <Link href={`${pathname === "/bookmarks" ? "/" : "/bookmarks"}`}>
            <div
              className={`h-[40px] flex items-center relative ${
                pathname === "/bookmarks"
                  ? "before:absolute before:bg-accent_blue before:h-1 before:w-[90%] before:-bottom-2"
                  : "before:none"
              }`}
            >
              <FontAwesomeIcon
                icon={faBars}
                className={`md:hidden p-4 h-3/4 cursor-pointer relative ${
                  pathname === "/bookmarks"
                    ? "text-accent_blue"
                    : "text-lightGrey"
                }`}
              />
            </div>
          </Link>
        </div>

        <nav className="flex grow justify-center">
          {NAV_BUTTONS.map((button, id) => (
            <NavigationButton key={id} font={button.font} path={button.path} />
          ))}
        </nav>
        <div>
          <ul className="flex gap-2">
            {CIRCULAR_BUTTONS.map((button, id) => (
              <CircularButton key={id} font={button.font} />
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
