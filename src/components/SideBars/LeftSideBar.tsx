import React from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Footer from "../Footer";

export default function LeftSideBar() {
  return (
    <div className="flex flex-col justify-between">
      <Bookmarks />
      <Footer />
    </div>
  );
}
