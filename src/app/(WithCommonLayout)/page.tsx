"use client";
import { useUser } from "@/context/UserContext";
import React from "react";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h2>signanture home page</h2>
    </div>
  );
};

export default HomePage;
