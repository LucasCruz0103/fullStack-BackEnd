import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;
  const userId: string = req.user.id;

  await deleteContactService(contactId, userId);

  return res.status(204).send();
};
export default deleteContactController;
