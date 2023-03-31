export interface IContactRequest {
  fullName: string;
  email: string;
  telephone: string;
}

export interface IContactResponse {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string;
  userId: string;
}

export interface IContactUpdateRequest {
  fullName?: string;
  email?: string;
  telephone?: string;
}
