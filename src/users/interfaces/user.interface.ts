import { Document } from 'mongoose';

export interface User {
  readonly email: string;
  readonly pseudonym: string;
}
