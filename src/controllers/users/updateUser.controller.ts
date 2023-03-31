import { Request, Response } from "express";
import { IUserUpdateRequest } from "../../interfaces/user.interfaces";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdateRequest = req.body;
  const userId = req.params.id;
  const updateUser = await updateUserService(userData, userId);

  return res.status(200).json(updateUser);
};
export default updateUserController;
