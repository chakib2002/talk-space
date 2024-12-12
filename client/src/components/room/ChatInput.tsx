import React from "react";

const ChatInput = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="absolute bottom-7 w-full">
      <div className="m-auto flex max-w-5xl items-center justify-between gap-3 px-5">
        <input
          placeholder="Write your message"
          type="text"
          className="w-full rounded-full px-5 py-3"
        />
        {children}
      </div>
    </div>
  );
};

export default ChatInput;
