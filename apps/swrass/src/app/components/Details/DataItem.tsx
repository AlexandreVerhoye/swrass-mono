import React from 'react';
import styled from 'styled-components';

const DataItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.2em;
  font-size: 0.7em;
`;

const DataItemName = styled.span`
  font-weight: 700;
  &::after {
    content: ' : ';
  }
`;

const DataItemValue = styled.span`
  font-weight: 400;
  font-size: 0.7em;
`;

type DataItemProps = {
  dataName?: string;
};

const DataItem: React.FC<DataItemProps> = ({ dataName, children }) => {
  return (
    <DataItemContainer>
      {dataName && <DataItemName>{dataName}</DataItemName>}
      <DataItemValue>{children}</DataItemValue>
    </DataItemContainer>
  );
};

export default DataItem;
