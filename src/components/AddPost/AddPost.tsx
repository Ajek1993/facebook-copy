import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import GreySeparator from "../common/GreySeparator";
import {
  faFaceLaugh,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { persons } from "@/data/persons.ts";
import AddPostIcon from "./AddPostIcon";
import { useFirebase } from "@/providers/FirebaseProvider";

export default function AddPost() {
  const { picture, name } = persons[0];
  const { addPost, setPosts } = useFirebase();

  const [post, setPost] = useState({
    _id: "",
    user: {
      _id: 1,
      name: "John",
      lastname: "Smith",
      picture: "https://picsum.photos/50/50",
      short: "https://picsum.photos/140/240",
    },
    caption: "",
    image: "https://picsum.photos/732/400",
    likes: 0,
    comments: 0,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addPost(post);
    setPosts((prev: Post[]) => [post, ...prev]);
    setPost({
      _id: "",
      user: {
        _id: 1,
        name: "John",
        lastname: "Smith",
        picture: "https://picsum.photos/50/50",
        short: "https://picsum.photos/140/240",
      },
      caption: "",
      image: "https://picsum.photos/732/400",
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <article className="flex flex-col gap-2 px-4 py-3 my-2 bg-secondary_darkGrey rounded-xl">
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
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="rounded-full placeholder:text-lg text-lg bg-darkGrey px-4 py-1.5 w-full outline-none hover:opacity-85 cursor-pointer"
            placeholder={`What are you thinking about, ${name}?`}
            type="text"
            name="caption"
            value={post.caption}
            onChange={handleChange}
            autoComplete="off"
          />
        </form>
      </div>
      <GreySeparator />
      <ul className="flex justify-between items-center text-lightGrey">
        <AddPostIcon icon={faVideo} text={"Broadcast"} color={"red"} />
        <span className="hidden md:flex grow">
          <AddPostIcon icon={faImage} text={"Picture/movie"} color={"green"} />
        </span>
        <AddPostIcon
          icon={faFaceLaugh}
          text={"Mood/Activity"}
          color={"yellow"}
        />
      </ul>
    </article>
  );
}
