import React from "react";
import ResponsiveNav from "./NavBar/ResponsiveNav";
import { Metadata } from "next";

// TODO: crentralize metadata
export const metadata: Metadata = {
  title: 'Monorepo pick & play',
  description: 'Here we can pick and play with our custom components'
};

const Header = () => {
  return (
    <header className="top-0 z-50 bg-custom-dark-secondary shadow-md">
      <ResponsiveNav />
    </header>
  );
};

export default Header;
