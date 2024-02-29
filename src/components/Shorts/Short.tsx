import React from "react";
import Image from "next/image";

export default function Short({ person }: any) {
  return (
    <li className="relative h-full cursor-pointer">
      <Image
        src={person.picture}
        width={40}
        height={40}
        alt="user mini photo"
        className="rounded-full absolute top-3 left-3 border-4 border-solid border-accent_blue"
      />
      <Image
        src={person.short}
        width={140}
        height={240}
        alt="user short"
        className="rounded-xl"
      />
      <p className="absolute bottom-1 left-2">
        {person.name} {person.lastname}
      </p>
    </li>
  );
}
