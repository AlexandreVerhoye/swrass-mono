import { ISwAPIResponse } from '@swrass-mono/api-interfaces';
import axios from 'axios';
import config from './config';

const SwAPIClient = axios.create({
  baseURL: config.baseUrl,
  timeout: 1000,
});

export async function search(search: string) {
  const people = (await searchPeople(search)).data;
  const films = (await searchFilms(search)).data;
  const planets = (await searchPlanets(search)).data;
  const species = (await searchSpecies(search)).data;
  const starships = (await searchStarships(search)).data;
  const vehicles = (await searchVehicles(search)).data;

  return {
    people: people,
    films: films,
    planets: planets,
    species: species,
    starships: starships,
    vehicles: vehicles,
  };
}

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
