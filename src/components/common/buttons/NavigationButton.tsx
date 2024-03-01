import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as regular from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";

type AppProps = {
  font: regular.IconDefinition;
  path: string;
};

export default function NavigationButton({ font, path }: AppProps) {
  const actualPath = usePathname();

  return (
    <Link href={path}>
      <div
        className={`mainBtn relative h-[50px] w-max-[120px] flex justify-center items-center sm:px-4 md:px-6 lg:px-10 xl:px12 2xl:px-16 py-2 hover:${
          actualPath === path ? "bg-inherit" : "bg-darkGrey"
        } rounded-xl relative ${
          actualPath === path
            ? "before:absolute before:bg-accent_blue before:h-1 before:w-[90%] before:-bottom-1"
            : "before:none"
        } after:absolute after:-bottom-10 after:bg-white after:px-2 after:py-1 after:rounded-xl after:opacity-70  after:hidden after:justify-center after:items-center after:text-black hover:after:flex`}
      >
        <FontAwesomeIcon
          icon={font}
          className={`h-3/4 ${
            actualPath === path ? "text-accent_blue" : "text-white"
          } `}
        />
      </div>
    </Link>
  );
}
