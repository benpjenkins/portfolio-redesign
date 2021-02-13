import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { isMobile } from "react-device-detect";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { useMobileCheck } from "../hooks/useMobileCheck";

const Layout = ({ children }) => {
  const isMobile = useMobileCheck();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { isMobile })
  );

  return (
    <>
      <Header isMobile />
      {childrenWithProps}
      <Footer isMobile />
    </>
  );
};

export default Layout;
