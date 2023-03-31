import updateContactService from "../../services/contacts/updateContact.service";
import { Request, Response } from "express";
import { IContactUpdateRequest } from "../../interfaces/contact.interfaces";

const updateContactController = async (req: Request, res: Response) => {
  const contactData: IContactUpdateRequest = req.body;
  const contactId: string = req.params.id;
  const userId: string = req.user.id;
  const updateContact = await updateContactService(
    contactData,
    contactId,
    userId
  );

  return res.status(200).json(updateContact);
};
export default updateContactController;
