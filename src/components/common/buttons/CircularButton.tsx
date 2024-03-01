import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";

type AppProps = {
  font: regular.IconDefinition;
};

export default function CircularButton({ font }: AppProps) {
  return (
    <li>
      <div className="sideBtn h-[45px] w-[45px] flex items-center justify-center p-2 bg-darkGrey hover:opacity-75 rounded-full cursor-pointer after:absolute after:-bottom-10 after:bg-white after:px-2 after:py-1 after:rounded-xl after:hidden after:justify-center after:items-center after:text-black hover:after:flex">
        <FontAwesomeIcon icon={font} className="h-3/4" />
      </div>
    </li>
  );
}
