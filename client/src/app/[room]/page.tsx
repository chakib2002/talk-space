"use client";

import { usePathname } from "next/navigation";
import React from "react";
import getToken from "~/hooks/getToken";

const Room = () => {
  const token = getToken(usePathname());
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {token}
    </div>
  );
};

export default Room;
