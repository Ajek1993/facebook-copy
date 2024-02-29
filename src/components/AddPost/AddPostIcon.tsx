import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";

type AppProps = {
  icon: regular.IconDefinition;
  text: string;
  color: string;
};

export default function AddPostIcon({ icon, text, color }: AppProps) {
  return (
    <button className="px-6 py-2 grow flex justify-center items-center gap-3 hover:bg-darkGrey hover:opacity-90 rounded-lg cursor-pointer">
      <FontAwesomeIcon icon={icon} className={`text-${color} h-[25px]`} />
      <p>{text}</p>
    </button>
  );
}
