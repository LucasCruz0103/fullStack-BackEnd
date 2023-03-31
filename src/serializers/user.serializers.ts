import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserLogin,
  IUserUpdateRequest,
} from "../interfaces/user.interfaces";
import { contactResponseSerializer } from "./contact.serializers";

export const userRequestSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().max(200).required(),
  email: yup.string().email().max(100).required(),
  password: yup.string().max(120).required(),
  telephone: yup.string().max(11).required(),
});

export const userResponseSerializer: SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().notRequired(),
  fullName: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
  createdAt: yup.string().notRequired(),
  contacts: yup.array(contactResponseSerializer),
});

export const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});

export const userUpdateSerializer: SchemaOf<IUserUpdateRequest> = yup.object().shape({
  fullName: yup.string().max(200).notRequired(),
  email: yup.string().email().max(100).notRequired(),
  telephone: yup.string().max(11).notRequired(),
  password: yup.string().max(120).notRequired(),
});

