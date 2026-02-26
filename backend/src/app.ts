import compression from 'compression';
import cors from 'cors';
import express from 'express';
import http from 'http';

import logger from '@config/logger';
import { initRedis } from '@config/redis';
import { errorConverter, errorHandler } from '@middlewares';
import router from '@routes';

// init Redis
const init = async () => {
  await initRedis();
};

init().catch((error) => {
  logger.error(error);
});

const app = express();

app.use(cors({ origin: '*' }));
app.use(compression());

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

app.use(errorConverter);
app.use(errorHandler);

app.use('/api', router);

const server = http.createServer(app);

export default server;
