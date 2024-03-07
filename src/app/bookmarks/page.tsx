import Bookmarks from "@/components/Bookmarks/Bookmarks";
import Footer from "@/components/Footer";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

export default function page() {
  return (
    <>
      <PrivateRoute>
        <Bookmarks />
        <Footer />
      </PrivateRoute>
    </>
  );
}
