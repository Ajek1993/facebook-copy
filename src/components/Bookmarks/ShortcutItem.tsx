import React from "react";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
  name: string;
  picture: regular.IconDefinition;
};

export default function ShortcutItem({ name, picture }: AppProps) {
  return (
    <div className="h-[50px] flex items-center px-4 py-6 gap-4 rounded-lg hover:bg-darkGrey cursor-pointer">
      <div className="w-[25px] h-[25px]">
        <FontAwesomeIcon icon={picture} className="h-full" />
      </div>
      <p>{name}</p>
    </div>
  );
}
