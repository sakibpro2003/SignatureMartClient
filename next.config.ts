import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
//  "@typescript-eslint/no-explicit-any":"warn",
   images: {
    domains: ['images.unsplash.com', 'cdn.example.com', 'another-source.io','cdn.flyonui.com'],
  },
};

export default nextConfig;
