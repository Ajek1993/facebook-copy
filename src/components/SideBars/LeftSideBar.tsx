import React from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import Footer from "../Footer";

export default function LeftSideBar() {
  return (
    <aside className="max-w-[280px] hidden xl:block m-2 fixed left-0">
      <div className="flex flex-col justify-between">
        <Bookmarks />
        <Footer />
      </div>
    </aside>
  );
}
