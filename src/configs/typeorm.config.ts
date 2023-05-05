import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
//import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
dotenv.config();
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  // namingStrategy: new SnakeNamingStrategy(),
};
