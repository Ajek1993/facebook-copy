import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { useFirebase } from "@/providers/FirebaseProvider";
import { useUser } from "@/providers/UserProvider";

type AppProps = {
  text: string;
  icon: IconDefinition;
  setLikes?: Function;
  isLike?: boolean;
  setIsLike?: Function;
  postID?: string | number;
};

export default function PostButton({
  text,
  icon,
  setLikes,
  isLike,
  setIsLike,
  postID,
}: AppProps) {
  const buttonColor = text === "Like" && isLike ? "#025af2" : "inherit";

  const { addLike } = useFirebase();
  const { actualUser } = useUser();

  const handleLikeClick = () => {
    addLike(postID, actualUser.userID);
    // setLikes && !isLike && setLikes((prev: number) => prev + 1);
    // setLikes && isLike && setLikes((prev: number) => prev - 1);
    // setIsLike && setIsLike((prev: boolean) => !prev);
  };

  return (
    <button
      className="grow h-[35px] flex justify-center items-center gap-3 py-1 hover:bg-darkGrey hover:bg-opacity-60 rounded-md"
      style={{
        color: buttonColor,
      }}
      onClick={handleLikeClick}
    >
      <FontAwesomeIcon icon={icon} className="h-3/5" />
      {text}
    </button>
  );
}
