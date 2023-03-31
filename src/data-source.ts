import "reflect-metadata";
import "dotenv/config";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import User from "./entities/user.entity";
import Contact from "./entities/contact.entity";
import { createAll1680199181943 } from "./migrations/1680199181943-createAll";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: false,
  entities: [User, Contact ],
  migrations: [createAll1680199181943],
});

export default AppDataSource;
