import React, { useEffect } from 'react';
import styled from 'styled-components';
import Searchbox from './components/Searchbox';
import logoAllianceRebel from '../assets/rebel_Alliance_logo_white.webp';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 3em;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 6em;
  width: 6em;
`;

export const App = () => {
  useEffect(() => {
    fetch('/api/v1/test').then((r) => console.log(r));
  }, []);

  return (
    <MainLayout>
      <TitleContainer>
        <Image src={logoAllianceRebel} />
        <h1>Star Wars Rebels Alliance Search System</h1>
      </TitleContainer>
      <Searchbox />
    </MainLayout>
  );
};

export default App;
