import config from '@config';
import { redisClient } from '@config/redis';

export const hasRedisKey = async (key: string): Promise<boolean> => {
  return (await redisClient.exists(key)) === 1;
};

export const getRedisValue = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

export const setRedisValue = async (key: string, value: string, ttl: number = config.redis.ttl) => {
  if (ttl === -1) await redisClient.set(key, value);
  else await redisClient.setEx(key, ttl * 60, value);
};

export const getRedisHashValue = async (key: string, field: string): Promise<string | null> => {
  return await redisClient.hGet(key, field);
};

export const setRedisHashValue = async (key: string, field: string, value: string, ttl: number = config.redis.ttl) => {
  await redisClient.hSet(key, field, value);
  if (ttl !== -1) await redisClient.expire(key, ttl * 60);
};

export const delRedisKey = async (key: string) => {
  await redisClient.del(key);
};
