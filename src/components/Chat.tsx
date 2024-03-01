"use client";

import React, { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

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
    <section className="mx-auto h-screen w-full flex flex-col items-center justify-center">
      <div>
        <h1>In progress: chat</h1>
        <div>
          <ScrollArea className="h-[400px] w-[400px] rounded-md p-4" ref={ref}>
            {error && <div className="text-sm text-red">{error.message}</div>}
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === "user" && (
                  <>
                    <div>USER</div>
                    <p>{message.content}</p>
                  </>
                )}
                {message.role === "assistant" && (
                  <>
                    <div>ASSISTANT</div>
                    <p>{message.content}</p>
                  </>
                )}
              </div>
            ))}
          </ScrollArea>

          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-center"
          >
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask me something"
              className="p-2 text-black"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="p-2 bg-slate-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
