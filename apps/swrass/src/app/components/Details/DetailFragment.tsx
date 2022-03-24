import React from 'react';
import {
  IPeople,
  dataType,
  IVehicles,
  IFilms,
  ISpecies,
  IPlanets,
  IStarships,
} from '@swrass-mono/api-interfaces';
import styled from 'styled-components';
import DataItem from './DataItem';
import SEO from '@components/SEO';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Name = styled.h1`
  margin-top: 0 !important;
  font-size: 2em;
  font-weight: 700;
`;

const DataType = styled.span`
  text-transform: uppercase;
  font-weight: 300;
  font-size: small;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

type PeopleProps = {
  data: IPeople;
};

export const People: React.FC<PeopleProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.PEOPLE}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="Birth date">{data.birth_year}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};

/*---------------------------------------------------------------*/

type VehiclesProps = {
  data: IVehicles;
};

export const Vehicles: React.FC<VehiclesProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.VEHICLES}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="Pilot">{data.pilots}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};

/*---------------------------------------------------------------*/

type FilmsProps = {
  data: IFilms;
};

export const Films: React.FC<FilmsProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.title} />
      <Container>
        <Header>
          <DataType>{dataType.FILMS}</DataType>
          <Name>{data.title}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="Release date">{data.release_date}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};

/*---------------------------------------------------------------*/

type SpeciesProps = {
  data: ISpecies;
};

export const Species: React.FC<SpeciesProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.SPECIES}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="People">{data.people}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};

/*---------------------------------------------------------------*/

type PlanetsProps = {
  data: IPlanets;
};

export const Planets: React.FC<PlanetsProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.PLANETS}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="Population">{data.population}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};

/*---------------------------------------------------------------*/

type StarshipsProps = {
  data: IStarships;
};

export const Starships: React.FC<StarshipsProps> = ({ data }) => {
  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.PLANETS}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataItem dataName="Model">{data.model}</DataItem>
        </DataContainer>
      </Container>
    </>
  );
};
