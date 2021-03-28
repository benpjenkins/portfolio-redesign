import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // const childrenWithProps = React.Children.map(children, (child) => {
  //   React.cloneElement(child, { isMobile });
  // });

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className='"flex-1 overflow-y-auto'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
