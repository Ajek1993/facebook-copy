import React from "react";
import BookmarksItem from "./BookmarksItem";
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

interface Bookmark {
  name: string;
  path: string;
  picture: regular.IconDefinition;
}

const bookmarks: Bookmark[] = [
  { name: "User", path: "/user", picture: faHouse },
  { name: "Friends", path: "/friends", picture: faFilm },
  { name: "Memories", path: "/memories", picture: faStore },
  { name: "Films", path: "/films", picture: faUsers },
  { name: "Saves", path: "/saves", picture: faGamepad },
  { name: "Groups", path: "/groups", picture: faGamepad },
];

export default function Bookmarks() {
  return (
    <ul>
      {bookmarks.map((bookmark, id) => (
        <li key={id}>
          <BookmarksItem
            name={bookmark.name}
            path={bookmark.path}
            picture={bookmark.picture}
          />
        </li>
      ))}
    </ul>
  );
}
