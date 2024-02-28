import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-lightGrey text-center text-sm mt-12 ">
      <span>&copy;</span>{" "}
      <Link href={"https://github.com/Ajek1993/"}>
        2024 Created by Arkadiusz Sarach
      </Link>
    </footer>
  );
}
