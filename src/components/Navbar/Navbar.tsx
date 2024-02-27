"use client";
import React, { useState } from "react";
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
  faBars,
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
  const [menuOpen, setMenuOpen] = useState(false);

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
              className="rounded-full placeholder:italic bg-darkGrey px-4 pl-10 py-2 outline-none hidden lg:inline-block"
              placeholder="Search Facebook"
              type="text"
            />
            <input
              className="rounded-full w-10 h-10 bg-darkGrey px-4 p-2 outline-none inline-block lg:hidden"
              type="text"
            />
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="sm:hidden p-4 h-3/4 text-lightGrey cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </div>

        <nav className="flex grow justify-center">
          {NAV_BUTTONS.map((button, id) => (
            <Link href={button.path} key={id}>
              <div
                className={`h-[50px] w-max-[120px] hidden sm:flex justify-center items-center sm:px-4 md:px-6 lg:px-10 xl:px12 2xl:px-16 py-2 hover:bg-secondary_darkGrey rounded-xl relative ${
                  path === button.path
                    ? "before:absolute before:bg-accent_blue before:h-1 before:w-[90%] before:-bottom-1"
                    : "before:none"
                }`}
              >
                <FontAwesomeIcon
                  icon={button.font}
                  className={`h-3/4 ${
                    path === button.path ? "text-accent_blue" : "text-lightGrey"
                  } `}
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
      {menuOpen && (
        <div>
          <ul>
            <li>11111111111111</li>
            <li>2222222222</li>
            <li>322333333333</li>
            <li>433344535644</li>
          </ul>
        </div>
      )}
    </>
  );
}
