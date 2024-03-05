"use client";

import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext<any>({} as any);

export default function ChatProvider({ children }: any) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimize, setChatMinimize] = useState(false);

  return (
    <ChatContext.Provider
      value={{ chatOpen, setChatOpen, chatMinimize, setChatMinimize }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatSetting = () => useContext(ChatContext);
