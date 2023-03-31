import { AppError } from "../../errors/AppError";
import { contactsRepository, usersRepository } from "../../repositories";

const deleteContactService = async (
  contactId: string,
  userId: string
): Promise<object> => {

  const user = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("Client don't exists!", 404);
  }

  const foundContactByParam = await contactsRepository.findOne({
    where: {
      id: contactId,
      user: { id: userId },
    },
  });

  if (!foundContactByParam) {
    throw new AppError("Contact not found!", 404);
  }

  await contactsRepository.remove(foundContactByParam);

  return {};
};

export default deleteContactService;

