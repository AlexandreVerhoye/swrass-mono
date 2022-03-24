import React from 'react';
import styled from 'styled-components';
import logoAllianceRebel from '@assets/rebel_Alliance_logo_white.webp';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1em 1.5em;
`;

const NavbarItems = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
`;

const NavbarLogo = styled.img`
  height: 2em;
  width: 2em;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarItems>
        <Link to="/">
          <NavbarLogo src={logoAllianceRebel} />
        </Link>
        <span>Star Wars Rebels Alliance Search System</span>
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;
