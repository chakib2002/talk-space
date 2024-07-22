import React, { useState } from "react";
import JoinRoomModal from "./JoinRoomModal";
import TokenInput from "./TokenInput";
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";

const Banner = () => {
  const [token, setToken] = useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-12 sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="relativea mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          <BannerText>
            <TokenInput token={token} setToken={setToken} setOpen={setOpen} />
          </BannerText>
          <JoinRoomModal isOpen={open} onOpenChange={setOpen} token={token} />
          <BannerImage />
        </div>
      </div>
    </section>
  );
};

export default Banner;
