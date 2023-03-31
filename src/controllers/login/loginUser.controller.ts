import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user.interfaces";
import loginUserService from "../../services/login/loginUser.service";

const loginUserController = async (req: Request, res: Response) => {
  const userData: IUserLogin = req.body;
  const token = await loginUserService(userData);

  return res.status(200).json({ token });
};
export default loginUserController;
