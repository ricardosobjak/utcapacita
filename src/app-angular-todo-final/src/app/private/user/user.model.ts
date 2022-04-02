export class User {
  id: number;
  name: string;
  email: string;
  login: string;
  password: string;
  type: string;
  birth: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserListResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  content: User[];
}
