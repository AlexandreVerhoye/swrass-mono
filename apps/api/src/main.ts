import { ISearchAll } from '@swrass-mono/api-interfaces';
import * as express from 'express';
import { search } from './app/app.controller';

const app = express();

//Route search
app.get('/api/v1/search', async (req, res) => {
  try {
    const data: ISearchAll = await search('r2');
    res.json(data);
  } catch (err) {
    console.log(err.response.statusText);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
