import React from "react";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
  icon: regular.IconDefinition;
};

export default function ShortPaginationButton({ icon }: AppProps) {
  return (
    <div className="flex items-center justify-center h-[50px] w-[50px] bg-secondary_darkGrey hover:bg-lightGrey rounded-full cursor-pointer">
      <FontAwesomeIcon icon={icon} className="h-2/5" />
    </div>
  );
}
