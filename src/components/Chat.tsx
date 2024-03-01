"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";

export default function Chat() {
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

  return (
    <div className="mx-auto max-w-3xl w-[450px]">
      <h1>In progress: chat</h1>
      <div className="mt-3 w-full max-w-lg rounded-2xl border">
        <ScrollArea className="h-[450px] w-full p-4 overflow-y-auto" ref={ref}>
          {error && <div className="text-sm text-red">{error.message}</div>}
          {messages.map((message) => (
            <ul key={message.id}>
              {message.role === "user" && (
                <li className="flex justify-end my-2">
                  <p className="bg-accent_blue px-3 py-2 rounded-lg max-w-3/4">
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

                  <p className="bg-darkGrey px-3 py-2 rounded-lg max-w-3/4">
                    {message.content}
                  </p>
                </li>
              )}
            </ul>
          ))}
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
            className="px-4 pt-2 pb-1 rounded-full text-sm w-full m-2 bg-darkGrey"
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
