import React from 'react';
import styled from 'styled-components';

const DataCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-card);
  color: var(--color-dark);
  border: 1px solid white;
  padding: 1em;
`;

const DataCaseTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
`;

const DataCaseChildrenContainer = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

type DataCaseProps = {
  title?: string;
};

const DataCase: React.FC<DataCaseProps> = ({ title, children }) => {
  return (
    <DataCaseContainer>
      <DataCaseTitle>{title}</DataCaseTitle>
      <DataCaseChildrenContainer>{children}</DataCaseChildrenContainer>
    </DataCaseContainer>
  );
};

export default DataCase;
