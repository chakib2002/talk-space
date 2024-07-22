import { Image } from "@nextui-org/react";
import React from "react";

const BannerImage = () => {
  return (
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
        <Image
          className="h-full w-full object-cover opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <Image
        className="relative mx-auto w-full max-w-md"
        src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
        alt=""
      />
    </div>
  );
};

export default BannerImage;
