import Layout from '@components/Layout';
import {
  dataType,
  IFilms,
  IPeople,
  IPlanets,
  ISpecies,
  IStarships,
  IVehicles,
} from '@swrass-mono/api-interfaces';
import fetcher from '@utils/fetcher';
import Loading from '@components/Loading';
import Error from '@components/Error';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';
import {
  Films,
  People,
  Planets,
  Species,
  Starships,
  Vehicles,
} from '@components/Details/DetailFragment';

const Container = styled.div`
  align-items: stretch;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const getComponentByDataType = (
  type: dataType,
  data: IPeople | IVehicles | IFilms | ISpecies | IPlanets | IStarships
): React.ReactElement => {
  switch (type) {
    case dataType.PEOPLE:
      return <People data={data as IPeople} />;
    case dataType.VEHICLES:
      return <Vehicles data={data as IVehicles} />;
    case dataType.FILMS:
      return <Films data={data as IFilms} />;
    case dataType.SPECIES:
      return <Species data={data as ISpecies} />;
    case dataType.PLANETS:
      return <Planets data={data as IPlanets} />;
    case dataType.STARSHIPS:
      return <Starships data={data as IStarships} />;
    default:
      return <Error />;
  }
};

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
        {isValidating && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}
        {error && <Error />}
        {data && getComponentByDataType(type as dataType, data)}
      </Container>
    </Layout>
  );
};

export default Details;
