import { ISearchAll } from '@swrass-mono/api-interfaces';
import * as express from 'express';
import { search } from './app/app.controller';

const app = express();

//Route search
app.get('/api/v1/test', async (req, res) => {
  res.status(200).json({ status: 'la' });
});

app.get('/api/v1/search/:keywords', async (req, res) => {
  try {
    const keywords = req.params.keywords;
    console.log(keywords);
    const data: ISearchAll = await search(keywords);
    res.json(data);
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
