import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/ui/Footer";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
