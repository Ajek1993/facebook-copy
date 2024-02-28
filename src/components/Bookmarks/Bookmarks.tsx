import React from "react";
import BookmarksItem from "./BookmarksItem";
import {
  faFilm,
  faUsers,
  faUser,
  faClockRotateLeft,
  faBookmark,
  faUserGroup,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";

interface Bookmark {
  name: string;
  path: string;
  picture: regular.IconDefinition;
}

const bookmarks: Bookmark[] = [
  { name: "User", path: "/userInfo", picture: faUser },
  { name: "Friends", path: "/friends", picture: faUserGroup },
  { name: "Memories", path: "/memories", picture: faClockRotateLeft },
  { name: "Films", path: "/movies", picture: faFilm },
  { name: "Saves", path: "/saves", picture: faBookmark },
  { name: "Groups", path: "/groups", picture: faUsers },
  { name: "Events", path: "/events", picture: faCalendarDay },
];

export default function Bookmarks() {
  return (
    <ul className="m-2">
      {bookmarks.map((bookmark, id) => (
        <li key={id}>
          <BookmarksItem
            name={bookmark.name}
            path={bookmark.path}
            picture={bookmark.picture}
          />
        </li>
      ))}
      <div className="w-full h-0.5 bg-darkGrey"></div>
    </ul>
  );
}
