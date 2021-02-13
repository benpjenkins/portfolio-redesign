import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './Header';
import Footer from './Footer';
import { useMobileCheck } from '../hooks/useMobileCheck';

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

  const childrenWithProps = React.Children.map(children, (child) => {
    React.cloneElement(child, { isMobile });
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Header isMobile={isMobile} />
      {childrenWithProps}
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Layout;
