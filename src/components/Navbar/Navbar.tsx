import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilm,
  faStore,
  faUsers,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

interface Button {
  name: string;
  font: regular.IconDefinition;
}

export default function Navbar() {
  const NAV_BUTTONS: Button[] = [
    { name: "Home", font: faHouse },
    { name: "Movies", font: faFilm },
    { name: "Marketplace", font: faStore },
    { name: "Groups", font: faUsers },
    { name: "Games", font: faGamepad },
  ];
  return (
    <header className="h-[60px] flex items-center justify-between p-2">
      <div className="flex items-center gap-3">
        <div>
          <Link href={"/"}>
            <div className="h-[50px] flex items-center">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#B197FC" }}
                className="h-3/4"
              />
            </div>
          </Link>
        </div>

        <input className="rounded-full placeholder:italic bg-darkGrey px-4 py-2" />
      </div>

      <nav className="flex">
        {NAV_BUTTONS.map((button, id) => (
          <div key={id} className="px-10 py-2 hover:bg-slate-700 rounded-xl">
            <Link href={"/"}>
              <div className="h-[50px] flex items-center">
                <FontAwesomeIcon
                  icon={button.font}
                  className="h-1/2 text-lightGrey"
                />
              </div>
            </Link>
          </div>
        ))}
      </nav>
      <div>
        <ul className="flex">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </header>
  );
}
