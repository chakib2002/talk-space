import React, { type ReactElement } from "react";

const BannerText = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Create & Join Chat Rooms with a Token
      </h1>
      <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
        Create your own chat rooms and invite others with a unique token. Enjoy
        real-time messaging, secure access, and easy room management. Perfect
        for group discussions, collaborations, and casual chats. Start your
        conversation now!
      </p>
      {children}
    </div>
  );
};

export default BannerText;
