import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
