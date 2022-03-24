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
import DataCase from './DataCase';

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
  font-size: 3em;
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
  // const [homeworld, setHomeworld] = useState<RessourceLink>();
  // const [species, setSpecies] = useState<Array<RessourceLink>>();
  // const [starships, setStarships] = useState<Array<RessourceLink>>();
  // const [vehicles, setVehicles] = useState<Array<RessourceLink>>();

  // useEffect(() => {
  //   const fetchHomeworld = async () => {
  //     const homeWorldId: number = swapiUrlDeconstructor(data.homeworld);
  //     await axios
  //       .get<IPlanets>(`/api/v1/planets/${homeWorldId}`)
  //       .then((res) => {
  //         setHomeworld({
  //           title: res.data.name,
  //           url: `/planets/${homeWorldId}`,
  //         });
  //       });
  //   };

  //   fetchHomeworld();
  //   console.log(homeworld?.title);
  // }, []);

  return (
    <>
      <SEO title={data.name} />
      <Container>
        <Header>
          <DataType>{dataType.PEOPLE}</DataType>
          <Name>{data.name}</Name>
        </Header>
        <DataContainer>
          <DataCase title="Main informations">
            <DataItem dataName="Gender">{data.gender}</DataItem>
            <DataItem dataName="Birth date">{data.birth_year}</DataItem>
            <DataItem dataName="Hair color">{data.hair_color}</DataItem>
            <DataItem dataName="Skin color">{data.skin_color}</DataItem>
          </DataCase>
          <DataCase title="Other informations">
            <DataItem dataName="Mass">{data.mass}</DataItem>
            <DataItem dataName="Eye color">{data.eye_color}</DataItem>
          </DataCase>
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
          <DataCase title="Main informations">
            <DataItem dataName="Model">{data.model}</DataItem>
            <DataItem dataName="Vehicle class">{data.vehicle_class}</DataItem>
            <DataItem dataName="Passengers count">{data.passengers}</DataItem>
            <DataItem dataName="Crew count">{data.crew}</DataItem>
            <DataItem dataName="Cost (in credit)">
              {data.cost_in_credits}
            </DataItem>
          </DataCase>
          <DataCase title="Dimensions and capacity">
            <DataItem dataName="Length">{data.length}</DataItem>
            <DataItem dataName="Cargo capacity">{data.cargo_capacity}</DataItem>
            <DataItem dataName="Max speed">
              {data.max_atmosphering_speed}
            </DataItem>
            <DataItem dataName="Consummable">{data.consumables}</DataItem>
          </DataCase>
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
          <DataCase title="Dimensions and capacity">
            <DataItem dataName="Director">{data.director}</DataItem>
            <DataItem dataName="Producer">{data.producer}</DataItem>
            <DataItem dataName="Release date">{data.release_date}</DataItem>
          </DataCase>
          <DataCase title="Description">
            <DataItem>{data.opening_crawl}</DataItem>
          </DataCase>
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
          <DataCase title="Main informations">
            <DataItem dataName="Classification">{data.classification}</DataItem>
            <DataItem dataName="Designation">{data.designation}</DataItem>
            <DataItem dataName="Language">{data.language}</DataItem>
          </DataCase>
          <DataCase title="Characteristic">
            <DataItem dataName="Average height">{data.average_height}</DataItem>
            <DataItem dataName="Average lifespan">
              {data.average_lifespan}
            </DataItem>
            <DataItem dataName="Skin color">{data.skin_colors}</DataItem>
            <DataItem dataName="Eye colors">{data.eye_colors}</DataItem>
            <DataItem dataName="Hair colors">{data.hair_colors}</DataItem>
          </DataCase>
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
          <DataCase title="Main informations">
            <DataItem dataName="Climate">{data.climate}</DataItem>
            <DataItem dataName="Population">{data.population}</DataItem>
            <DataItem dataName="Terrain">{data.terrain}</DataItem>
          </DataCase>
          <DataCase title="Characteristic">
            <DataItem dataName="Diameter">{data.diameter}</DataItem>
            <DataItem dataName="Gravity">{data.gravity}</DataItem>
            <DataItem dataName="Orbital period">{data.orbital_period}</DataItem>
            <DataItem dataName="Rotation period">
              {data.rotation_period}
            </DataItem>
          </DataCase>
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
          <DataCase title="Main informations">
            <DataItem dataName="Model">{data.model}</DataItem>
            <DataItem dataName="Class">{data.starship_class}</DataItem>
            <DataItem dataName="Manufacturer">{data.manufacturer}</DataItem>
            <DataItem dataName="Passengers">{data.passengers}</DataItem>
            <DataItem dataName="Crew">{data.crew}</DataItem>
            <DataItem dataName="Cost (in credit)">
              {data.cost_in_credits}
            </DataItem>
          </DataCase>
          <DataCase title="Dimensions and capacity">
            <DataItem dataName="Cargo capacity">{data.cargo_capacity}</DataItem>
            <DataItem dataName="Consumables">{data.consumables}</DataItem>
            <DataItem dataName="Hyperdrive rating">
              {data.hyperdrive_rating}
            </DataItem>
            <DataItem dataName="Length">{data.length}</DataItem>
            <DataItem dataName="Max speed">
              {data.max_atmosphering_speed}
            </DataItem>
            <DataItem dataName="MGLT">{data.MGLT}</DataItem>
          </DataCase>
        </DataContainer>
      </Container>
    </>
  );
};
