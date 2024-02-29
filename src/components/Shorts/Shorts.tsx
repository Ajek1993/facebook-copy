"use client";
import React, { useState } from "react";
import Image from "next/image";
import { persons } from "@/data/persons";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import ShortPaginationButton from "../buttons/ShortPaginationButton";

export default function Shorts() {
  const [shortsPage, setShortsPage] = useState(0);
  return (
    <ul className="py-4 flex flex-wrap justify-center gap-2 gap-y-6 max-w-[750px] h-[270px] overflow-hidden">
      {shortsPage > 0 && (
        <span
          className="absolute z-10 left-4 top-[138px] -translate-y-[50%]"
          onClick={() => setShortsPage((prev) => prev - 1)}
        >
          <ShortPaginationButton icon={faLessThan} />
        </span>
      )}
      {shortsPage + 5 < persons.length && (
        <span
          className="absolute z-10 right-4 top-[138px] -translate-y-[50%]"
          onClick={() => setShortsPage((prev) => prev + 1)}
        >
          <ShortPaginationButton icon={faGreaterThan} />
        </span>
      )}

      {persons.slice(shortsPage, shortsPage + 5).map((person, id) => (
        <li key={id} className="relative h-full cursor-pointer">
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
      ))}
    </ul>
  );
}
