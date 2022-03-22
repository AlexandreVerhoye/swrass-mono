export interface ISwAPIResponse {
  count: number;
  next: null;
  previous: null;
  results: Array<IPeople | IFilm | IPlanet | ISpecie | IStarship | IVehicle>;
}

export interface ISearchAll {
  people: ISwAPIResponse;
  films: ISwAPIResponse;
  planets: ISwAPIResponse;
  species: ISwAPIResponse;
  starships: ISwAPIResponse;
  vehicles: ISwAPIResponse;
}

export interface IPeople {
  birth_year: string;
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

export interface IFilm {
  title: string;
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

export interface IPlanet {
  name: string;
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

export interface ISpecie {
  average_height: string;
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

export interface IStarship {
  MGLT: string;
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

export interface IVehicle {
  cargo_capacity: string;
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
