// we made this file, it must be in the root directory of the project

import { LoadStrategy, defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { MySqlDriver } from '@mikro-orm/mysql';
import { SeedManager } from '@mikro-orm/seeder';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // line 8 to 18 is waht we copied from app.module.ts
  driver: MySqlDriver, // the database we want to use, specify we want to use MySQL db
  host: process.env.DB_HOST, // "localhost:3306" can cause issues; this is where our database is
  port: Number(process.env.DB_PORT),
  user: process.env.USER,
  password: process.env.PASSWORD,
  dbName: process.env.DB_NAME, // name of our database
  debug: true, // optional, shows you SQL queries being run in the terminal
  entitiesTs: ['src/**/*.entity.ts'], // ** is wildcard folder name, * is wildcard file name; need to let our ORM know where our entities are (this is our TS files of our entities)
  entities: ['dist/**/*.entity.js'],
  loadStrategy: LoadStrategy.JOINED, // how relationships are loaded
  migrations: {
    pathTs: 'src/migrations',
    path: 'dist/migrations', // build version
  },
  seeder: {
    pathTs: 'src/seeders',
    path: 'dist/seeders',
  },
  extensions: [Migrator, SeedManager], // this allows us to have migrations and seed data
});
