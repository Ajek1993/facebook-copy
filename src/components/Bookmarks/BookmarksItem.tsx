import React from "react";
import * as regular from "@fortawesome/free-regular-svg-icons";

type AppProps = {
  name: string;
  path: string;
  picture: regular.IconDefinition;
};

export default function BookmarksItem({ name, path, picture }: AppProps) {
  return (
    <div className="bg-slate-600 h-[50px]">
      {name}: {path}
    </div>
  );
}
