import React from 'react';
import styled from 'styled-components';
import logoAllianceRebel from '@assets/rebel_Alliance_logo_white.webp';

const LoadingContainer = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`;

const LoadingItem = styled.img`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  animation: loading-circle-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingItem src={logoAllianceRebel} />
    </LoadingContainer>
  );
};

export default Loading;
