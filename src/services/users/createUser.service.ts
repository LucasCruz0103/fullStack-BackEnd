import { IUserRequest, IUserResponse } from "../../interfaces/user.interfaces";
import { userResponseSerializer } from "../../serializers/user.serializers";
import { AppError } from "../../errors/AppError";
import { usersRepository } from "../../repositories";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const foundUser = await usersRepository.findOne({
    where: {
      email: userData.email,
    },
  });

  if (foundUser) {
    throw new AppError("User already exists", 409);
  }

  const createUser = usersRepository.create(userData);

  await usersRepository.save(createUser);

  const createdUserResponse = await userResponseSerializer.validate(
    createUser,
    { stripUnknown: true }
  );

  return createdUserResponse;
};

export default createUserService;
