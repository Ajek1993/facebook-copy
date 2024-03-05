import React from "react";
import { useChatSetting } from "@/providers/ChatProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
  icon: IconDefinition;
  name?: string;
};

export default function ChatButton({ icon, name }: AppProps) {
  const { setChatOpen, setChatMinimize } = useChatSetting();

  const handleClick = () => {
    name === "windowMinimize/Maximize" &&
      setChatMinimize((prev: boolean) => !prev);
    if (name === "windowClose") {
      setChatOpen((prev: boolean) => !prev);
      setChatMinimize(false);
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
