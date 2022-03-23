import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  margin: auto;
  display: flex;
  width: 80vw;
  min-height: 3em;
  align-items: center;
  justify-content: center;
`;

const TextNavbar = styled.span`
  font-size: 2em;
  font-weight: 700;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <TextNavbar>SWRASS</TextNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
