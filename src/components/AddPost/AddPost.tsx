import React from "react";
import Image from "next/image";
import GreySeparator from "../common/GreySeparator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaugh,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { persons } from "@/data/persons";
import AddPostIcon from "./AddPostIcon";

export default function AddPost() {
  const { picture, name } = persons[0];

  return (
    <article className="flex flex-col gap-2 px-4 py-3 bg-secondary_darkGrey rounded-xl">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center">
          <Image
            src={picture}
            width={40}
            height={40}
            alt="user mini photo"
            className="rounded-full"
          />
        </div>
        <input
          className="rounded-full placeholder:italic bg-darkGrey px-4 py-2 outline-none w-full"
          placeholder={`What are you thinking about, ${name}?`}
          type="text"
        />
      </div>
      <GreySeparator />
      <ul className="px-2 flex justify-between items-center text-lightGrey">
        <AddPostIcon icon={faVideo} text={"Live broadcast"} color={"red"} />
        <AddPostIcon icon={faImage} text={"Picture/movie"} color={"green"} />
        <AddPostIcon
          icon={faFaceLaugh}
          text={"Mood/Activity"}
          color={"yellow"}
        />
      </ul>
    </article>
  );
}
