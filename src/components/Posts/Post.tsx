"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GreySeparator from "../common/GreySeparator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faShare,
  faThumbsUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import PostButton from "./PostButton";
import { useUser } from "@/providers/UserProvider";
import PostDeleteModal from "./PostDeleteModal";
import { useFirebase } from "@/providers/FirebaseProvider";

export default function Post({ post }: { post: Post }) {
  const { name, lastname, picture, _id } = post.user;
  const { _id: postID } = post;
  const { actualUser } = useUser();

  const isUserPost = _id === actualUser.userID ? true : false;
  const [deletedPost, setDeletedPost] = useState(false);

  const [listOpen, setListOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(true);

  const { posts } = useFirebase();
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (
      posts.filter(
        (post: Post) =>
          post.whoLikes.includes(actualUser.userID) && postID === post._id
      ).length > 0
    ) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
    setLikes(post.likes);
  }, [posts, actualUser.userID, postID, post.likes]);

  return (
    <>
      {!deletedPost && (
        <article className="my-2 bg-secondary_darkGrey rounded-lg">
          <div className="px-3 py-1 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="flex items-center py-2.5 gap-3 hover:opacity-85 cursor-pointer rounded-md">
                <Image
                  src={picture}
                  width={40}
                  height={40}
                  alt="userPhoto"
                  className="rounded-full w-[40px] h-[40px]"
                />
              </div>
              <div className="leading-7">
                <h1>
                  {name} {lastname}
                </h1>
                <h2 className="text-xs text-lightGrey">
                  {post.createdAt.toDateString()}
                </h2>
              </div>
            </div>
            <div className="flex gap-1 relative">
              <button
                className="h-[40px] w-[40px] text-lightGrey hover:bg-darkGrey flex justify-center items-center cursor-pointer rounded-full"
                onClick={() => setListOpen((prev: boolean) => !prev)}
              >
                <FontAwesomeIcon icon={faEllipsis} className="h-1/2" />
              </button>

              <button
                className="h-[40px] w-[40px] text-lightGrey hover:bg-darkGrey flex justify-center items-center cursor-pointer rounded-full"
                onClick={() => setPostOpen((prev) => !prev)}
              >
                <FontAwesomeIcon icon={faXmark} className="h-1/2" />
              </button>

              {listOpen && isUserPost && (
                <ul className="absolute -bottom-[100px] right-[34px] bg-secondary_darkGrey flex flex-col w-[120px] z-10">
                  <li className="cursor-pointer hover:bg-darkGrey px-4 py-3">
                    Edytuj post
                  </li>
                  <PostDeleteModal
                    setListOpen={setListOpen}
                    setDeletedPost={setDeletedPost}
                    postID={postID}
                  />
                </ul>
              )}
            </div>
          </div>
          {postOpen && (
            <div className="text-lightGrey">
              <p className="p-3 text-white">{post.caption}</p>

              <Image
                src={post.image}
                width={732}
                height={400}
                alt="user post"
              />

              <div className="p-3 flex justify-between items-center ">
                <div>
                  {isLike && likes === 1 && <span>You likes</span>}
                  {isLike && likes > 1 && (
                    <span>You and {likes - 1} other people likes</span>
                  )}
                  {!isLike && <span>{likes} likes</span>}
                </div>
                <div className="flex gap-3">
                  <p>{post.comments} comments</p>
                  <p>{post.shares} shares</p>
                </div>
              </div>
              <div className="px-3">
                <GreySeparator />
              </div>
              <div className="px-2 pb-1 flex justify-between items-center">
                <PostButton
                  text={"Like"}
                  icon={faThumbsUp}
                  setLikes={setLikes}
                  isLike={isLike}
                  setIsLike={setIsLike}
                  postID={postID}
                />
                <PostButton text={"Comment"} icon={faComment} />
                <PostButton text={"Share"} icon={faShare} />
              </div>
            </div>
          )}
        </article>
      )}
    </>
  );
}
