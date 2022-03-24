import React, { useEffect } from 'react';
import { ISearchAll } from '@swrass-mono/api-interfaces';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResultsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultsItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const ResultItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5em;
  background-color: var(--color-card);
  color: var(--color-dark);
  padding: 2em;
  transition: all var(--dur);

  &:hover {
    background-color: var(--color-brand);
    color: var(--color-light);
  }
`;

const ResultItemDataType = styled.span`
  text-transform: uppercase;
`;

const ResultItemName = styled.span`
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.5em;
`;

const Counter = styled.span`
  font-size: 2em;
  font-weight: 700;
  margin: 1em 0;
`;
type ResultsListProps = {
  searchResults: ISearchAll;
};

const ResultsList: React.FC<ResultsListProps> = ({ searchResults }) => {
  return (
    <ResultsListContainer>
      <Counter>{searchResults.count} results</Counter>
      <ResultsItemsGrid>
        {searchResults.data.map((result, key) => (
          <ResultItemContainer to={`/${result.type}/${result.id}`} key={key}>
            <ResultItemDataType>{result.type}</ResultItemDataType>
            <ResultItemName>{result.name}</ResultItemName>
          </ResultItemContainer>
        ))}
      </ResultsItemsGrid>
    </ResultsListContainer>
  );
};

export default ResultsList;
