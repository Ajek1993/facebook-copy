"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import GreySeparator from "./common/GreySeparator";
import axios from "axios";
import PreviousChat from "./PreviousChat";

export default function Chat({}) {
  const ref = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      initialMessages: [
        {
          id: Date.now().toString(),
          role: "system",
          content: "You are an assistant that gives short answers",
        },
      ],
    });

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const sendData = async (data: any) => {
    !isLoading && axios.post("http://localhost:3001/test", { data });
  };
  return (
    <div className="mx-auto max-w-3xl w-[350px]">
      <div className="mt-3 w-full max-w-lg rounded-xl bg-secondary_darkGrey">
        <div className="flex items-center py-2.5 px-2 gap-2 hover:bg-darkGrey cursor-pointer rounded-md w-1/2 -mb-1">
          <Image
            src={"https://picsum.photos/50/50"}
            width={35}
            height={35}
            alt="userPhoto"
            className="rounded-full"
          />
          <p>John Smith</p>
        </div>
        <GreySeparator />
        <ScrollArea
          className="h-[350px] w-full p-4 overflow-y-auto text-sm"
          ref={ref}
        >
          {error && <div className="text-sm text-red">{error.message}</div>}
          <PreviousChat />
          {messages.map((message) => {
            sendData(message);
            return (
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
            );
          })}
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex justify-center">
          {/* <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p> */}
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me something"
            className="px-4 pt-2 pb-1 rounded-full text-sm w-full m-2 bg-darkGrey outline-none"
          />
          {/* <p>L</p> */}
          {/* <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-slate-500"
            >
              Send
            </button> */}
        </form>
      </div>
    </div>
  );
}
