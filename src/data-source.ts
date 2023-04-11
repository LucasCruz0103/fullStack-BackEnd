import "reflect-metadata";
import "dotenv/config";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Contact from "./entities/contact.entity";
import { createAll1680297885345 } from "./migrations/1680297885345-createAll";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: false,
  entities: [User, Contact ],
  migrations: [createAll1680297885345],
});

export default AppDataSource;
