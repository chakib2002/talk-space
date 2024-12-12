"use client";
import React from "react";
import ChatInput from "~/components/room/ChatInput";
import SendButton from "../../components/room/SendButton";
import Header from "~/components/room/Header";
import HeaderLayout from "~/components/room/HeaderLayout";

const Room = () => {
  return (
    <div className="">
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <ChatInput>
        <SendButton />
      </ChatInput>
    </div>
  );
};

export default Room;
