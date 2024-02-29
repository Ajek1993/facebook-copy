import React from "react";
import Post from "./Post";
import { posts } from "@/data/posts";

export default function Posts() {
  return (
    <>
      {posts.map((post, id) => (
        <Post post={post} key={id} />
      ))}
    </>
  );
}
