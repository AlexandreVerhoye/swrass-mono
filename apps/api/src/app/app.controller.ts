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

import { swapiUrlDeconstructor } from '@swrass-mono/utils';
import axios, { AxiosResponse } from 'axios';
import config from './config';

const SwAPIClient = axios.create({
  baseURL: config.apiUrl,
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
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  films.forEach((item: IFilms) => {
    finalArray.push({
      name: item.title,
      type: dataType.FILMS,
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  planets.forEach((item: IPlanets) => {
    finalArray.push({
      name: item.name,
      type: dataType.PLANETS,
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  species.forEach((item: ISpecies) => {
    finalArray.push({
      name: item.name,
      type: dataType.SPECIES,
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  starships.forEach((item: IStarships) => {
    finalArray.push({
      name: item.name,
      type: dataType.STARSHIPS,
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  vehicles.forEach((item: IVehicles) => {
    finalArray.push({
      name: item.name,
      type: dataType.VEHICLES,
      id: swapiUrlDeconstructor(item.url),
    });
    count++;
  });

  return {
    data: finalArray.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    ),
    count: count,
  };
}

/* --------------------------------------------------*/

/**
 * Search people in SWAPI
 * @param keywords keywords to search
 * @return Promise<ISwAPIResponse>
 */
export async function searchPeople(keywords: string) {
  return SwAPIClient.get<ISwAPIResponse>('people/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a people from SWAPI
 * @param id id of ressource
 * @return Promise<IPeople>
 */
export async function getPeople(id: number): Promise<AxiosResponse<IPeople>> {
  return SwAPIClient.get<IPeople>(`people/${id}`);
}

/* --------------------------------------------------*/

/**
 * Search films in SWAPI
 * @param keywords keywords to search
 * @return Promise<ISwAPIResponse>
 */
export async function searchFilms(
  keywords: string
): Promise<AxiosResponse<ISwAPIResponse>> {
  return SwAPIClient.get<ISwAPIResponse>('films/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a film from SWAPI
 * @param id id of ressource
 * @return Promise<IFilms>
 */
export async function getFilms(id: number): Promise<AxiosResponse<IFilms>> {
  return SwAPIClient.get<IFilms>(`films/${id}`);
}

/* --------------------------------------------------*/

/**
 * Search planets in SWAPI
 * @param keywords keywords to search
 * @return Promise<ISwAPIResponse>
 */
export async function searchPlanets(
  keywords: string
): Promise<AxiosResponse<ISwAPIResponse>> {
  return SwAPIClient.get<ISwAPIResponse>('planets/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a planet from SWAPI
 * @param id id of ressource
 * @return Promise<IPlanets>
 */
export async function getPlanets(id: number): Promise<AxiosResponse<IPlanets>> {
  return SwAPIClient.get<IPlanets>(`planets/${id}`);
}

/* --------------------------------------------------*/

/**
 * Search species in SWAPI
 * @param keywords keywords to search
 * @returns Promise<ISwAPIResponse>
 */
export async function searchSpecies(
  keywords: string
): Promise<AxiosResponse<ISwAPIResponse>> {
  return SwAPIClient.get<ISwAPIResponse>('species/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a specie from SWAPI
 * @param id id of ressource
 * @return Promise<ISpecies>
 */
export async function getSpecies(id: number): Promise<AxiosResponse<ISpecies>> {
  return SwAPIClient.get<ISpecies>(`species/${id}`);
}

/* --------------------------------------------------*/

/**
 * Search starships in SWAPI
 * @param keywords keywords to search
 * @returns Promise<ISwAPIResponse>
 */
export async function searchStarships(
  keywords: string
): Promise<AxiosResponse<ISwAPIResponse>> {
  return SwAPIClient.get<ISwAPIResponse>('starships/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a starships from SWAPI
 * @param id id of ressource
 * @return Promise<IStarships>
 */
export async function getStarships(
  id: number
): Promise<AxiosResponse<IStarships>> {
  return SwAPIClient.get<IStarships>(`starships/${id}`);
}

/* --------------------------------------------------*/

/**
 * Search vehicles in SWAPI
 * @param keywords keywords to search
 * @returns Promise<ISwAPIResponse>
 */
export async function searchVehicles(
  keywords: string
): Promise<AxiosResponse<ISwAPIResponse>> {
  return SwAPIClient.get<ISwAPIResponse>('vehicles/', {
    params: {
      search: keywords,
    },
  });
}

/**
 * Retrieve a vehicle from SWAPI
 * @param id id of ressource
 * @return Promise<IVehicle>
 */
export async function getVehicles(
  id: number
): Promise<AxiosResponse<IVehicles>> {
  return SwAPIClient.get<IVehicles>(`vehicles/${id}`);
}
