import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import loginUserController from "../controllers/login/loginUser.controller";
import listByIdController from "../controllers/users/listById.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureFieldsAddresMiddleware from "../middlewares/ensureFields.middleware";
import ensureUserLoggedMiddleWare from "../middlewares/ensureUserLogged.middleware";
import {
  userLoginSerializer,
  userRequestSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post(
  "/login",
  ensureDataIsValidMiddleware(userLoginSerializer),
  loginUserController
);

userRoutes.post(
  "",
  ensureFieldsAddresMiddleware,
  ensureDataIsValidMiddleware(userRequestSerializer),
  createUserController
);

userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUserLoggedMiddleWare,
  listByIdController
);

userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureUserLoggedMiddleWare,
  ensureDataIsValidMiddleware(userUpdateSerializer),
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUserLoggedMiddleWare,
  deleteUserController
);

export default userRoutes;
