import {
  IContactResponse,
  IContactUpdateRequest,
} from "../../interfaces/contact.interfaces";
import { contactResponseSerializer } from "../../serializers/contact.serializers";
import { AppError } from "../../errors/AppError";
import { contactsRepository, usersRepository } from "../../repositories";

const updateContactService = async (
  contactData: IContactUpdateRequest,
  contactId: string,
  userId: string
): Promise<IContactResponse> => {
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

  const { fullName, email, telephone } = contactData;

  if (!fullName && !email && !telephone) {
    throw new AppError(
      "You don't have authorization to change this fields",
      403
    );
  }

  const updateContact = contactsRepository.create({
    ...foundContactByParam,
    fullName: fullName || foundContactByParam.fullName,
    email: email || foundContactByParam.email,
    telephone: telephone || foundContactByParam.telephone,
  });

  await contactsRepository.save(updateContact);

  const contactResponse = await contactResponseSerializer.validate(
    updateContact,
    {
      stripUnknown: true,
    }
  );

  return contactResponse;
};

export default updateContactService;
