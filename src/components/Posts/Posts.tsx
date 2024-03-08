import React from "react";
import Post from "./Post";
import { useFirebase } from "@/providers/FirebaseProvider";
import { CircularProgress } from "@nextui-org/react";

export default function Posts() {
  const { posts } = useFirebase();
  console.log(posts);

  return (
    <>
      {!posts && (
        <div className="flex items-center justify-center my-40">
          <CircularProgress size="lg" aria-label="Loading..." />
        </div>
      )}

      {posts &&
        posts.map((post: Post, id: number) => <Post post={post} key={id} />)}
    </>
  );
}
