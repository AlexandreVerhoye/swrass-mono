import React, { useEffect, useState } from 'react';
import { useQueryParams } from 'app/hooks/useQueryParams';
import Layout from '@components/Layout';
import Searchbox from '@components/Searchbox';

const SearchPage: React.FC = (props) => {
  const query = useQueryParams();
  const [keywords, setKeywords] = useState<string | null>();

  const handleSearch = (keywords: string) => {
    // navigate(`/search?q=${keywords}`);
  };

  useEffect(() => {
    const queryKeywords = query.get('q');
    setKeywords(queryKeywords);
    console.log(keywords);
  }, []);

  return (
    <Layout>
      <Searchbox callback={(value) => handleSearch(value)} value="test" />
    </Layout>
  );
};

export default SearchPage;
