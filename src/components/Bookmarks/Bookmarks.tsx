"use client";
import React, { useState } from "react";
import BookmarksItem from "./BookmarksItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faUsers,
  faUser,
  faClockRotateLeft,
  faBookmark,
  faUserGroup,
  faCalendarDay,
  faCaretDown,
  faFutbol,
  faCar,
  faCaretUp,
  faStore,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import ShortcutItem from "./ShortcutItem";
import Heading from "../Heading";

interface Bookmark {
  name: string;
  path: string;
  picture: regular.IconDefinition;
}

type Shortcut = Omit<Bookmark, "path">;

const bookmarks: Bookmark[] = [
  { name: "User", path: "/userInfo", picture: faUser },
  { name: "Friends", path: "/friends", picture: faUserGroup },
  { name: "Memories", path: "/memories", picture: faClockRotateLeft },
  { name: "Films", path: "/movies", picture: faFilm },
  { name: "Saves", path: "/saves", picture: faBookmark },
  { name: "Groups", path: "/groups", picture: faUsers },
  { name: "Events", path: "/events", picture: faCalendarDay },
  { name: "Marketplace", path: "/marketplace", picture: faStore },
  { name: "Payments", path: "#", picture: faCreditCard },
];

const shortcuts: Shortcut[] = [
  { name: "Urodziny Eli", picture: faCalendarDay },
  { name: "XXI Targi Pracy 2024", picture: faCalendarDay },
  { name: "Soccer Manager", picture: faFutbol },
  { name: "Cars Race", picture: faCar },
];

export default function Bookmarks() {
  const [visibleBookmarks, setVisibleBookmark] = useState(5);
  const numOfBookmarks = bookmarks.length;

  return (
    <ul>
      {bookmarks.slice(0, visibleBookmarks).map((bookmark, id) => (
        <li key={id}>
          <BookmarksItem
            name={bookmark.name}
            path={bookmark.path}
            picture={bookmark.picture}
          />
        </li>
      ))}
      <li>
        {visibleBookmarks < numOfBookmarks ? (
          <div
            className="h-[50px] flex items-center px-4 py-6 gap-4 rounded-lg hover:bg-darkGrey cursor-pointer"
            onClick={() => setVisibleBookmark(numOfBookmarks)}
          >
            <div className="w-[25px] h-[25px]">
              <FontAwesomeIcon icon={faCaretDown} className="h-full" />
            </div>
            <p>Show more</p>
          </div>
        ) : (
          <div
            className="h-[50px] flex items-center px-4 py-6 gap-4 rounded-lg hover:bg-darkGrey cursor-pointer"
            onClick={() => setVisibleBookmark(5)}
          >
            <div className="w-[25px] h-[25px]">
              <FontAwesomeIcon icon={faCaretUp} className="h-full" />
            </div>
            <p>Show less</p>
          </div>
        )}
      </li>
      <div className="w-full h-0.5 my-2 bg-darkGrey"></div>
      <Heading title={"Your shortcuts"} />
      {shortcuts.map((shortcut, id) => (
        <li key={id}>
          <ShortcutItem name={shortcut.name} picture={shortcut.picture} />
        </li>
      ))}
    </ul>
  );
}
