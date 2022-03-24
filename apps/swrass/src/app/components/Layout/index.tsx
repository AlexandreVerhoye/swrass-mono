import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  padding: 1.5em;
  flex-grow: 1;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
