"use client";
import React from "react";
import Banner from "~/components/home/Banner";
import Header from "~/components/home/Header";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
    </div>
  );
};
export default Home;
