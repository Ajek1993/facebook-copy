import React from "react";
import { useChatSetting } from "@/providers/ChatProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
  icon: IconDefinition;
  name?: string;
  role?: string;
};

export default function ChatButton({ icon, name, role }: AppProps) {
  const {
    setChatAIOpen,
    setChatAIMinimize,
    setChatUserOpen,
    setChatUserMinimize,
  } = useChatSetting();

  const handleClick = () => {
    if (name === "windowMinimize/Maximize" && role === "ai") {
      setChatAIMinimize((prev: boolean) => !prev);
    }

    if (name === "windowMinimize/Maximize" && role === "user") {
      setChatUserMinimize((prev: boolean) => !prev);
    }

    if (name === "windowClose" && role === "ai") {
      setChatAIOpen((prev: boolean) => !prev);
      setChatAIMinimize(false);
    }
    if (name === "windowClose" && role === "user") {
      setChatUserOpen((prev: boolean) => !prev);
      setChatUserMinimize(false);
    }
  };

  return (
    <button
      className="h-[30px] w-[30px] text-lightGrey hover:bg-darkGrey flex justify-center items-center cursor-pointer rounded-full"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="h-1/2 text-accent_blue" />
    </button>
  );
}
