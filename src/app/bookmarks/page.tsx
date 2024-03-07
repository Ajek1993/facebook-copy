import Bookmarks from "@/components/Bookmarks/Bookmarks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

export default function page() {
  return (
    <>
      <PrivateRoute>
        <Navbar />
        <Bookmarks />
        <Footer />
      </PrivateRoute>
    </>
  );
}
