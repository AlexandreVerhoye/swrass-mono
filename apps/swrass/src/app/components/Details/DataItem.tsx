import React from 'react';
import styled from 'styled-components';

const DataItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

type DataItemProps = {
  dataName: string;
};

const DataItem: React.FC<DataItemProps> = ({ dataName, children }) => {
  return (
    <DataItemContainer>
      {dataName} : {children}
    </DataItemContainer>
  );
};

export default DataItem;
