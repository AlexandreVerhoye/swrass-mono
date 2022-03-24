import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Searchbox from '@components/Searchbox';
import { useSearchParams } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    setQuery(searchParams.get('q'));
  }, [searchParams]);

  const handleSearch = (keywords: string) => {
    setSearchParams({ q: keywords });
  };

  return (
    <Layout>
      <Searchbox callback={(value) => handleSearch(value)} value={query} />
    </Layout>
  );
};

export default SearchPage;
