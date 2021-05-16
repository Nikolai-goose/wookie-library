import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly body: string;
  readonly date_posted: string;
}
