import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  padding: 1.5em;
  flex: 1;
  overflow: auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
