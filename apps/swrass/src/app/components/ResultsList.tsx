import React, { useEffect } from 'react';
import { ISearchAll } from '@swrass-mono/api-interfaces';

type ResultsListProps = {
  searchResults: ISearchAll;
};

const ResultsList: React.FC<ResultsListProps> = ({ searchResults }) => {
  useEffect(() => {
    console.log(searchResults);
  });

  return (
    <div>
      count : {searchResults.count}
      {searchResults.data.map((result, key) => (
        <div key={key}>
          <span>{result.name}</span>
          <span>{result.type}</span>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
