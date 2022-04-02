export class Person {
  id!: number;
  name!: string;
  login!: string;
  email!: string;
  password!: string;
  birth!: Date;
  createdAt!: Date;
  updatedAt!: Date;
}

export interface PersonListResult {
  data: Person[];
  page: number;
  per_page: number;
  total_pages: number;
}

export interface PersonSingleResult {
  data: Person;
}