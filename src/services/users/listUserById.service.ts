import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { usersRepository } from "../../repositories";

const removePasswordField = (user: User) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const listByIdService = async (userId: string, userAuth: string) => {
  const foundUserByParam = await usersRepository.findOneBy({ id: userId });
  const foundUserByAuth = await usersRepository.findOneBy({ id: userAuth });

  if (!foundUserByAuth) {
    throw new AppError(
      "User does not have the necessary credentials. Login needed.",
      403
    );
  }

  if (!foundUserByParam) {
    throw new AppError("User not found", 404);
  }

  return removePasswordField(foundUserByParam);
};

export default listByIdService;
