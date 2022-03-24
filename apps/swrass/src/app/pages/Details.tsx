import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { dataType } from '@swrass-mono/api-interfaces';
import fetcher from '@utils/fetcher';
import { error } from 'console';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

const Container = styled.div`
  align-items: stretch;
`;

type DetailsUrlParams = {
  type: dataType;
  id: string;
};

const Details: React.FC = (props) => {
  const { type, id } = useParams<DetailsUrlParams>();

  const { data, error, isValidating } = useSWR(
    type && id && `/api/v1/${type}/${id}`,
    fetcher
  );

  return (
    <Layout>
      <Container>
        <h1>Result about </h1>
      </Container>
    </Layout>
  );
};

export default Details;
