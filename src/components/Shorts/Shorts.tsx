"use client";
import React, { useState } from "react";
import { persons } from "@/data/persons.ts";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import ShortPaginationButton from "../common/buttons/ShortPaginationButton";
import Short from "./Short";

export default function Shorts() {
  const [shortsPage, setShortsPage] = useState(0);
  console.log(shortsPage);
  console.log(persons.length);
  return (
    <ul
      className={`py-4 flex justify-${
        shortsPage + 5 === persons.length ? "end" : "start"
      } gap-2 gap-y-6 max-w-[750px] h-[270px] relative overflow-hidden`}
    >
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
      {persons
        .slice(shortsPage, shortsPage + 5)
        .map((person: Person, id: number) => (
          <Short person={person} key={id} />
        ))}
    </ul>
  );
}
