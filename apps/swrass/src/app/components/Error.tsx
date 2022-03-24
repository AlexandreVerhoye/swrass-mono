import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: red;
  font-weight: 700;
`;

const Error: React.FC = () => {
  return (
    <ErrorContainer>
      Error occured, please retry or contact the Rebels Alliance.
    </ErrorContainer>
  );
};

export default Error;
