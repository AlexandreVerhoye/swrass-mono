import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Searchbox from '@components/Searchbox';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Loading from '@components/Loading';
import Error from '@components/Error';
import ResultsList from '@components/ResultsList';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>(null);
  const { data, error, isValidating } = useSWR(
    query && `/api/v1/search/${query}`,
    fetcher
  );

  useEffect(() => {
    setQuery(searchParams.get('q'));
  }, [searchParams]);

  const handleSearch = (keywords: string) => {
    setSearchParams({ q: keywords });
  };

  return (
    <Layout>
      <Searchbox callback={(value) => handleSearch(value)} value={query} />
      {isValidating && <Loading />}
      {error && <Error />}
      {data && <ResultsList searchResults={data} />}
    </Layout>
  );
};

export default SearchPage;
