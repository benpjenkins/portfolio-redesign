import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = ({ isMobile }) => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Portfolio",
      url: "portfolio",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  if (isMobile) {
    return <HamburgerMenu />;
  }
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};
