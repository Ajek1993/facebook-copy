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
    <li className="flex justify-between items-center gap-3">
      <FontAwesomeIcon icon={icon} className={`text-${color} h-[25px]`} />
      <p>{text}</p>
    </li>
  );
}
