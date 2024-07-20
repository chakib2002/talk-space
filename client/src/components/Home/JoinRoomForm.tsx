import React from "react";

const JoinRoomForm = () => {
  return (
    <form
      action="#"
      method="POST"
      className="relative mt-8 rounded-full sm:mt-12"
    >
      <div className="relative">
        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Room Token"
            className="block w-full rounded-full border border-transparent bg-black py-4 pl-14 pr-6 text-white placeholder-gray-500 focus:border-transparent focus:ring-0 sm:py-5"
          />
        </div>
      </div>
      <div className="mt-4 flex sm:absolute sm:inset-y-1.5 sm:right-1.5 sm:mt-0">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-200 hover:opacity-90 sm:w-auto sm:py-3"
        >
          Join Room
        </button>
      </div>
    </form>
  );
};

export default JoinRoomForm;
