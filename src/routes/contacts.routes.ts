import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  contactRequestSerializer,
  contactUpdateSerializer,
} from "../serializers/contact.serializers";


const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactRequestSerializer),
  createContactController
);

contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(contactUpdateSerializer),
  updateContactController
);

contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactRoutes;
