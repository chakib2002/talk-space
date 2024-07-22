import React from "react";
import CreateRoomForm from "./CreateRoomForm";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="bg-black py-4 sm:py-6" x-data="{expanded: false}">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="h-9 w-auto"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                alt=""
              />
            </a>
          </div>

          <div className="group relative inline-flex items-center justify-center">
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <button
              onClick={() => setOpen(!open)}
              title=""
              className="relative inline-flex items-center justify-center rounded-full border border-transparent bg-black px-6 py-2 text-base font-normal text-white"
              role="button"
            >
              {" "}
              Create Chat Room{" "}
            </button>
          </div>
          <CreateRoomForm isOpen={open} onOpenChange={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
