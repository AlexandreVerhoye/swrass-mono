export interface ISwAPIResponse {
  count: number;
  next: null;
  previous: null;
  results: Array<
    IPeople | IFilms | IPlanets | ISpecies | IStarships | IVehicles
  >;
}

export enum dataType {
  PEOPLE = 'people',
  FILMS = 'films',
  PLANETS = 'planets',
  SPECIES = 'species',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles',
}

export interface RessourceLink {
  title: string;
  url: string;
}

export interface ISearchResult {
  name: string;
  type: dataType;
  id: number;
}

export interface ISearchAll {
  data: Array<ISearchResult>;
  count: number;
}

export interface IPeople {
  birth_year: string;
  type?: dataType.PEOPLE;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}

export interface IFilms {
  title: string;
  type?: dataType.FILMS;
  episode_id: number;
  characters: Array<string>;
  created: string;
  director: string;
  edited: string;
  opening_crawl: string;
  planets: Array<string>;
  producer: string;
  release_date: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}

export interface IPlanets {
  name: string;
  type?: dataType.PLANETS;
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface ISpecies {
  average_height: string;
  type?: dataType.SPECIES;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<string>;
  films: Array<string>;
  skin_colors: string;
  url: string;
}

export interface IStarships {
  MGLT: string;
  type?: dataType.STARSHIPS;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: Array<string>;
  pilots: Array<string>;
  starship_class: string;
  url: string;
}

export interface IVehicles {
  cargo_capacity: string;
  type?: dataType.VEHICLES;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<string>;
  films: Array<string>;
  url: string;
  vehicle_class: string;
}
