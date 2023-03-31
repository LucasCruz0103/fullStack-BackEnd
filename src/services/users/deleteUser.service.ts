import { AppError } from "../../errors/AppError";
import { usersRepository } from "../../repositories";

const deleteUserService = async (userId: string): Promise<object> => {
  const user = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("Client don't exists!", 404);
  }

  await usersRepository.remove(user);

  return {};
};

export default deleteUserService;

