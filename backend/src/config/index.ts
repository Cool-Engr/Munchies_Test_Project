import dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default('8282').description('Server Port'),
    REDIS_HOST: Joi.string().required().description('Redis host'),
    REDIS_PORT: Joi.number().required().description('Redis port'),
    REDIS_TTL: Joi.number().default(5).description('Redis TTL'),
    EXTERNAL_API: Joi.string().required().description('External API')
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    ttl: envVars.REDIS_TTL
  },
  externalApi: envVars.EXTERNAL_API
};
