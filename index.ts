/* eslint-disable no-console */
import cors from 'cors';
import type { Request, Response } from 'express';
import express from 'express';
import mongoose from 'mongoose';

import TenatAdminRoute from './src/routes/TenatAdminRoute';
const app = express();

app.use(express.json());

mongoose
  .connect('mongodb+srv://vaibhav:vaibhav@cluster0.per6s.mongodb.net/admindb', {
    retryWrites: true,
    w: 'majority',
  })
  .then(() => {
    console.log('Connected to the MongoDB');
    startServer();
  })
  .catch(error => {
    console.log('error: ', error);
  });

/** Server start only if mongoDB connected */
const startServer = () => {
  app.use((req, res, next) => {
    console.log(
      `Incoming request from -> Method: [${req.method}] - Url: [${req.url}] - IP [${req.socket.remoteAddress}]`,
    );

    res.on('finish', () => {
      console.log(
        `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`,
      );
    });

    next();
  });
};

app.use(express.urlencoded({ extended: true }));
app.use(cors());
/** Rules of our API */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With,Content-Type,Accept,Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH');
    return res.status(200).json({});
  }

  next();
});

app.get('/', (req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel');
});

app.use('/tenatadmin', TenatAdminRoute);

app.get('/ping', (res: express.Response) => {
  return res.json({ message: 'HealthCheck' });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).send('Not found');
});

app.use((err: any, req: express.Request, res: express.Response) => {
  res.status(err.status || 500).send('Internal server error');
});

app.listen(8085, () => {
  console.log(`Server running on port ${8085}`);
});
