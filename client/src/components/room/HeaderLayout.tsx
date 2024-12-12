import React from "react";

const HeaderLayout = ({ children }: { children: JSX.Element }) => {
  return <div className="m-auto max-w-5xl px-5 pt-5">{children}</div>;
};

export default HeaderLayout;
