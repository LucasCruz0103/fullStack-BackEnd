import { IContactResponse } from "./contact.interfaces";

export interface IUserRequest {
  fullName: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  contacts: Array<IContactResponse> | [];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  fullName?: string;
  email?: string;
  telephone?: string;
  password?: string;
}
