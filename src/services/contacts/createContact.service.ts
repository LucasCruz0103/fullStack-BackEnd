import { AppError } from "../../errors/AppError";
import {
  IContactRequest,
  IContactResponse,
} from "../../interfaces/contact.interfaces";
import { contactResponseSerializer } from "../../serializers/contact.serializers";
import { contactsRepository, usersRepository } from "../../repositories";

const createContactService = async (
  contactData: IContactRequest,
  idUser: string
): Promise<IContactResponse> => {
  const user = await usersRepository.findOneBy({
    id: idUser,
  });

  if (!user) {
    throw new AppError("Client don't exists!", 404);
  }

  const createContact = contactsRepository.create({
    ...contactData,
    user: user,
  });

  await contactsRepository.save(createContact);

  const createdContactResponse = await contactResponseSerializer.validate(
    createContact,
    { stripUnknown: true }
  );

  return createdContactResponse;
};

export default createContactService;
