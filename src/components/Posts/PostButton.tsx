import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type AppProps = {
  text: string;
  icon: IconDefinition;
};

export default function PostButton({ text, icon }: AppProps) {
  return (
    <button className="grow h-[35px] flex justify-center items-center gap-3 py-1 hover:bg-darkGrey rounded-md">
      <FontAwesomeIcon icon={icon} className="h-3/5" />
      {text}
    </button>
  );
}
