import { createClient } from 'redis';

import config from '@config';
import logger from './logger';

export const redisClient = createClient({
  socket: {
    host: config.redis.host,
    port: config.redis.port
  }
});

redisClient.on('error', (err) => {
  logger.error('Redis client error', err);
});

export const initRedis = async () => {
  try {
    await redisClient.connect();
    logger.info('Redis connected');
  } catch (err) {
    const msg = (err as Error).message;
    throw new Error(msg);
  }
};
