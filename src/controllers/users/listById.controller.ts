import { Request, Response } from "express";
import listByIdService from "../../services/users/listUserById.service";

const listByIdController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const userAuth: string = req.user.id;
  const user = await listByIdService(userId, userAuth);

  return res.status(200).json(user);
};
export default listByIdController;
