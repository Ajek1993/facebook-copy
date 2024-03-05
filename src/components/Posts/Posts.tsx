import React from "react";
import Post from "./Post";
import { useFirebase } from "@/providers/FirebaseProvider";

export default function asyncPosts() {
  const { posts } = useFirebase();

  return (
    <>
      {!posts && <p>Loading...</p>}
      {posts &&
        posts.map((post: Post, id: number) => <Post post={post} key={id} />)}
    </>
  );
}
