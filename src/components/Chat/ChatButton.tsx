import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
  icon: IconDefinition;
};

export default function ChatButton({ icon }: AppProps) {
  return (
    <button
      className="h-[35px] w-[35px] text-lightGrey hover:bg-darkGrey flex justify-center items-center cursor-pointer rounded-full"
      //   onClick={() => setPostOpen((prev) => !prev)}
    >
      <FontAwesomeIcon icon={icon} className="h-1/2 text-accent_blue" />
    </button>
  );
}
