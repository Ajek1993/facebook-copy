import React from "react";

type AppProps = {
  title: string;
};

export default function Heading({ title }: AppProps) {
  return <p className="px-2 py-2 text-lg text-lightGrey">{title}</p>;
}
