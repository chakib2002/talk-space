import React, { useState } from "react";
import JoinRoomForm from "./JoinRoomForm";

const Banner = () => {
  const [token, setToken] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="relativea mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Create & Join Chat Rooms with a Token
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Create your own chat rooms and invite others with a unique token.
              Enjoy real-time messaging, secure access, and easy room
              management. Perfect for group discussions, collaborations, and
              casual chats. Start your conversation now!
            </p>

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
                    type="text"
                    name=""
                    id=""
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    placeholder="Enter Room Token"
                    className="block w-full rounded-full border border-transparent bg-black py-4 pl-14 pr-6 text-white placeholder-gray-500 focus:border-transparent focus:ring-0 sm:py-5"
                  />
                </div>
              </div>
              <div className="mt-4 flex sm:absolute sm:inset-y-1.5 sm:right-1.5 sm:mt-0">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-200 hover:opacity-90 sm:w-auto sm:py-3"
                >
                  Join Room
                </button>
              </div>
            </form>
          </div>
          <JoinRoomForm isOpen={open} onOpenChange={setOpen} token={token} />
          <div className="relative">
            <div className="absolute inset-0">
              <svg
                className="opacity-70 blur-3xl filter"
                style={{ filter: "blur(64px)" }}
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#c)"
                />
                <defs>
                  <linearGradient
                    id="c"
                    x1="82.7339"
                    y1="550.792"
                    x2="-39.945"
                    y2="118.965"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "var(--color-cyan-500)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "var(--color-cyan-500)" }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover opacity-50"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                alt=""
              />
            </div>

            <img
              className="relative mx-auto w-full max-w-md"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
