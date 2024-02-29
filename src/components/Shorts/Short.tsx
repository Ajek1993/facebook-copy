import React from "react";
import Image from "next/image";

export default function Short({ person }: { person: Person }) {
  return (
    <li className="relative cursor-pointer hover:before:absolute hover:before:block hover:before:h-full hover:before:w-full hover:before:bg-black hover:before:rounded-xl hover:before:opacity-10">
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
        className="rounded-xl h-[240px]"
      />
      <p className="absolute bottom-1 left-2">
        {person.name} {person.lastname}
      </p>
    </li>
  );
}
