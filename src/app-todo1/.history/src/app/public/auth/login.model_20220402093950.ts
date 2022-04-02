import { Person } from 'src/app/private/person/person.model';

interface LoginResponse {
    token: string;
    user: Person;
    loggedIn: Date;
    expiresIn: Date;
}
