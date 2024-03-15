"use client";

import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext<any>({} as any);

export default function ChatProvider({ children }: any) {
  const [chatAIOpen, setChatAIOpen] = useState(false);
  const [chatUserOpen, setChatUserOpen] = useState(false);
  const [chatUserData, setChatUserData] = useState({
    name: "",
    lastname: "",
    picture: "",
  });
  const [chatAIMinimize, setChatAIMinimize] = useState(false);
  const [chatUserMinimize, setChatUserMinimize] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        chatAIOpen,
        setChatAIOpen,
        chatUserOpen,
        setChatUserOpen,
        chatUserData,
        setChatUserData,
        chatAIMinimize,
        setChatAIMinimize,
        chatUserMinimize,
        setChatUserMinimize,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatSetting = () => useContext(ChatContext);
