import React from "react";
import data from "../data/data.json";
import Image from "next/image";

export default function PreviousChat() {
  return (
    data.length > 0 &&
    data.map((message) => (
      <ul key={message.id}>
        {message.role === "user" && (
          <li className="flex justify-end my-2">
            <p className="bg-accent_blue px-4 py-2 rounded-3xl max-w-[75%]">
              {message.content}
            </p>
          </li>
        )}
        {message.role === "assistant" && (
          <li className="flex justify-start items-end gap-3 my-2">
            <div className="w-[40px] h-[40px] min-w-[40px]">
              <Image
                src={"https://picsum.photos/68/68"}
                width={40}
                height={40}
                alt="userPhoto"
                className="rounded-full"
              />
            </div>

            <p className="bg-darkGrey px-4 py-2 rounded-3xl max-w-[75%]">
              {message.content}
            </p>
          </li>
        )}
      </ul>
    ))
  );
}
