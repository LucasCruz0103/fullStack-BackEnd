import {
  IUserResponse,
  IUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import { userResponseSerializer } from "../../serializers/user.serializers";
import { AppError } from "../../errors/AppError";
import { usersRepository } from "../../repositories";

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string
): Promise<IUserResponse> => {
  const foundUserByParam = await usersRepository.findOneBy({ id: userId });

  if (!foundUserByParam) {
    throw new AppError("User not found!", 404);
  }

  const { fullName, email, password, telephone } = userData;

  if (!fullName && !email && !password && !telephone) {
    throw new AppError(
      "You don't have authorization to change this fields",
      403
    );
  }

  const updateUser = usersRepository.create({
    ...foundUserByParam,
    fullName: fullName || foundUserByParam.fullName,
    email: email || foundUserByParam.email,
    password: password || foundUserByParam.password,
    telephone: telephone || foundUserByParam.telephone,
  });

  await usersRepository.save(updateUser);

  const userResponse = await userResponseSerializer.validate(updateUser, {
    stripUnknown: true,
  });

  return userResponse;
};

export default updateUserService;
