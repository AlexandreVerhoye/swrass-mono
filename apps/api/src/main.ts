import { dataType, ISearchAll } from '@swrass-mono/api-interfaces';
import { error } from 'console';
import * as express from 'express';
import {
  search,
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
} from './app/app.controller';

const app = express();

//Route search
app.get('/api/v1/test', async (req, res) => {
  res.status(200).json({ status: 'la' });
});

// Search route
app.get('/api/v1/search/:keywords', async (req, res) => {
  try {
    const keywords: string = req.params.keywords;
    const data: ISearchAll = await search(keywords);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

// Retrieve a specific item of specific type
app.get('/api/v1/:type/:id', async (req, res) => {
  try {
    const type: string = req.params.type;
    const id: number = parseInt(req.params.id);

    switch (type) {
      case dataType.PEOPLE:
        res.json((await getPeople(id)).data);
        break;
      case dataType.VEHICLES:
        res.json((await getVehicles(id)).data);
        break;
      case dataType.FILMS:
        res.json((await getFilms(id)).data);
        break;
      case dataType.SPECIES:
        res.json((await getSpecies(id)).data);
        break;
      case dataType.PLANETS:
        res.json((await getPlanets(id)).data);
        break;
      case dataType.STARSHIPS:
        res.json((await getStarships(id)).data);
        break;
      default:
        throw new error();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
