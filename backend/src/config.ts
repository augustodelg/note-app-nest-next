import { registerAs } from '@nestjs/config';
import Joi from 'joi';

class Config {
  readonly register = registerAs('config', () => {
    return {
      postgres: {
        dbName: process.env.POSTGRES_DB,
        port: parseInt(process.env.POSTGRES_PORT, 10),
        password: process.env.POSTGRES_PASSWORD,
        user: process.env.POSTGRES_USER,
        host: process.env.DATABASE_HOST,
      },
    };
  });

  readonly validationSchema = () => {
    const schema = {
      POSTGRES_PASSWORD: Joi.string().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_DB: Joi.string().required(),
      DATABASE_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
    };
    return Joi.valid(process.env, schema);
  };
}

export default new Config();
