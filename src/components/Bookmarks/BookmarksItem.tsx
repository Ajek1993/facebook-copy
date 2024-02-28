import React from "react";
import Link from "next/link";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
  name: string;
  path: string;
  picture: regular.IconDefinition;
};

export default function BookmarksItem({ name, path, picture }: AppProps) {
  return (
    <Link href={path}>
      <div className=" h-[50px] flex items-center px-4 py-6 gap-4 rounded-lg hover:bg-darkGrey">
        <div className="w-[25px] h-[25px]">
          <FontAwesomeIcon icon={picture} size="xl" />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
}
