"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import GreySeparator from "../common/GreySeparator";
import {
  faPhone,
  faVideo,
  faWindowMaximize,
  faWindowMinimize,
  faXmark,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ChatButton from "./ChatButton";
import { useChatSetting } from "@/providers/ChatProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatAI({}) {
  const { chatAIMinimize } = useChatSetting();

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
    <div
      className={`mx-auto max-w-3xl ${
        chatAIMinimize ? "w-[200px]" : "w-[320px]"
      }`}
    >
      <div className="mt-3 w-full max-w-lg rounded-xl bg-secondary_darkGrey">
        <div className="flex justify-between -mb-1">
          <div className="flex items-center py-2.5 px-2 gap-2 hover:bg-darkGrey cursor-pointer rounded-md w-1/2 ">
            <Image
              src={"https://picsum.photos/50/50"}
              width={35}
              height={35}
              alt="userPhoto"
              className="rounded-full w-[35px] h-[35px]"
            />
            {!chatAIMinimize && <p>John Smith</p>}
          </div>
          <div className="flex items-center px-2">
            <ChatButton icon={faPhone} />
            <ChatButton icon={faVideo} />
            {!chatAIMinimize && (
              <ChatButton
                icon={faWindowMinimize}
                name="windowMinimize/Maximize"
                role="ai"
              />
            )}
            {chatAIMinimize && (
              <ChatButton
                icon={faWindowMaximize}
                name="windowMinimize/Maximize"
                role="ai"
              />
            )}
            <ChatButton icon={faXmark} name="windowClose" role="ai" />
          </div>
        </div>

        {!chatAIMinimize && <GreySeparator />}
        {!chatAIMinimize && (
          <ScrollArea
            className="live_chat h-[330px] w-full p-4 overflow-y-auto text-sm"
            ref={ref}
          >
            {error && <div className="text-sm text-red">{error.message}</div>}
            {messages.map((message) => (
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
            ))}
          </ScrollArea>
        )}

        {!chatAIMinimize && (
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Aa"
              className="px-4 pt-2 pb-1 rounded-full text-sm w-full m-2 bg-darkGrey outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="text-accent_blue py-2 pr-2 w-[40px] flex items-center justify-center hover:brightness-150"
            >
              <FontAwesomeIcon icon={faCircleArrowRight} className="h-3/4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
