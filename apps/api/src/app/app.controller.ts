import {
  dataType,
  IFilms,
  IPeople,
  IPlanets,
  ISearchAll,
  ISpecies,
  IStarships,
  ISwAPIResponse,
  IVehicles,
} from '@swrass-mono/api-interfaces';
import axios from 'axios';
import config from './config';

const SwAPIClient = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
});

/**
 * Search an item in the SWAPI database
 * @param search Keywords to search on SWAPI
 * @returns Results from search on SWAPI
 */
export async function search(search: string): Promise<ISearchAll> {
  const people = (await searchPeople(search)).data.results;
  console.log('People fetched');
  const films = (await searchFilms(search)).data.results;
  console.log('Films fetched');
  const planets = (await searchPlanets(search)).data.results;
  console.log('planets fetched');
  const species = (await searchSpecies(search)).data.results;
  console.log('Species fetched');
  const starships = (await searchStarships(search)).data.results;
  console.log('Starships fetched');
  const vehicles = (await searchVehicles(search)).data.results;
  console.log('Vehicles fetched');

  const finalArray = [];
  let count = 0;

  people.forEach((item: IPeople) => {
    finalArray.push({
      name: item.name,
      type: dataType.PEOPLE,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  films.forEach((item: IFilms) => {
    finalArray.push({
      name: item.title,
      type: dataType.FILMS,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  planets.forEach((item: IPlanets) => {
    finalArray.push({
      name: item.name,
      type: dataType.PLANETS,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  species.forEach((item: ISpecies) => {
    finalArray.push({
      name: item.name,
      type: dataType.SPECIES,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  starships.forEach((item: IStarships) => {
    finalArray.push({
      name: item.name,
      type: dataType.STARSHIPS,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  vehicles.forEach((item: IVehicles) => {
    finalArray.push({
      name: item.name,
      type: dataType.VEHICLES,
      id: urlDeconstructor(item.url),
    });
    count++;
  });

  return { data: finalArray, count: count };
}

/**
 * Get item's ID from SWAPI URL (not an unique ID as it is linked to a dataType)
 * @param url Item URL on SWAPI database
 * @returns
 */
const urlDeconstructor = (url: string): number => {
  const res = url.slice(0, -1).split('/').pop();
  return parseInt(res);
};

async function searchPeople(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('people/', {
    params: {
      search: keywords,
    },
  });
}

async function searchFilms(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('films/', {
    params: {
      search: keywords,
    },
  });
}

async function searchPlanets(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('planets/', {
    params: {
      search: keywords,
    },
  });
}

async function searchSpecies(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('species/', {
    params: {
      search: keywords,
    },
  });
}

async function searchStarships(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('starships/', {
    params: {
      search: keywords,
    },
  });
}

async function searchVehicles(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('vehicles/', {
    params: {
      search: keywords,
    },
  });
}
