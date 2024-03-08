import React from "react";
import Post from "./Post";
import { useFirebase } from "@/providers/FirebaseProvider";
import { CircularProgress } from "@nextui-org/react";

export default function Posts() {
  const { posts } = useFirebase();

  return (
    <>
      {!posts && <CircularProgress size="lg" aria-label="Loading..." />}
      {posts &&
        posts.map((post: Post, id: number) => <Post post={post} key={id} />)}
    </>
  );
}
