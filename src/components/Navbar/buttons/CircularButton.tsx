import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";

type AppProps = {
  font: regular.IconDefinition;
};

export default function CircularButton({ font }: AppProps) {
  return (
    <li>
      <div className="h-[45px] w-[45px] flex items-center justify-center p-2 bg-darkGrey hover:bg-secondary_darkGrey rounded-full cursor-pointer">
        <FontAwesomeIcon icon={font} className="h-3/4 text-lightGrey " />
      </div>
    </li>
  );
}
