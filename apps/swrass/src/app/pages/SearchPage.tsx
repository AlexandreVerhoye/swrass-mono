import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Searchbox from '@components/Searchbox';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Loading from '@components/Loading';
import Error from '@components/Error';
import ResultsList from '@components/ResultsList';
import styled from 'styled-components';
import SEO from '@components/SEO';

const Container = styled.div`
  align-items: stretch;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

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
    <>
      {query && <SEO title={query} />}
      <Layout>
        <Searchbox callback={(value) => handleSearch(value)} value={query} />
        <Container>
          {isValidating && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}
          {error && <Error />}
          {data && <ResultsList searchResults={data} />}
        </Container>
      </Layout>
    </>
  );
};

export default SearchPage;
