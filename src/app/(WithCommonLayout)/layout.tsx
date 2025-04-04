import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
      <Toaster />
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
