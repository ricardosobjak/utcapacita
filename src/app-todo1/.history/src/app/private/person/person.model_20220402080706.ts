export class Person {
  id!: number;
  first_name!: string;
  last_name!: string;
  email!: string;
  avatar!: string;
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