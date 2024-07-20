"use client";
import React from "react";
import Banner from "~/components/Home/Banner";
import JoinRoomForm from "~/components/Home/JoinRoomForm";
import Header from "~/components/Home/Header";
import CreateRoomForm from "~/components/Home/CreateRoomForm";

const ComponentName = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="min-h-screen">
      <Header setOpen={() => setOpen(true)}>
        <CreateRoomForm onOpenChange={setOpen} isOpen={open} />
      </Header>
      <Banner>
        <JoinRoomForm />
      </Banner>
    </div>
  );
};
export default ComponentName;
