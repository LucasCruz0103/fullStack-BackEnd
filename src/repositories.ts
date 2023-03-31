import { AppDataSource } from "./data-source";
import Contact from "./entities/contact.entity";
import User from "./entities/user.entity";

export const usersRepository = AppDataSource.getRepository(User);
export const contactsRepository = AppDataSource.getRepository(Contact);