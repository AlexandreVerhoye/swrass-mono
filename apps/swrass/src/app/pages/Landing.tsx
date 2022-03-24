import React from 'react';
import styled from 'styled-components';
import logoAllianceRebel from '@assets/rebel_Alliance_logo_white.webp';
import Searchbox from '@components/Searchbox';
import { useNavigate } from 'react-router-dom';
import SEO from '@components/SEO';

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

export const Landing: React.FC = () => {
  // useEffect(() => {
  //   fetch('/api/v1/test').then((r) => console.log(r));
  // }, []);

  const navigate = useNavigate();

  const handleSearch = (keywords: string) => {
    navigate(`/search?q=${keywords}`);
  };

  return (
    <>
      <SEO title="Home" />
      <MainLayout>
        <TitleContainer>
          <Image src={logoAllianceRebel} />
          <h1>Star Wars Rebels Alliance Search System</h1>
        </TitleContainer>
        <Searchbox callback={handleSearch} />
      </MainLayout>
    </>
  );
};

export default Landing;
