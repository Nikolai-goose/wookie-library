import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDTO } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
    // @ts-ignore
    const newBook = await this.bookModel(createBookDTO);
    return newBook.save();
  }

  async getBook(bookID): Promise<Book> {
    const book = await this.bookModel.findById(bookID).exec();
    return book;
  }

  async getBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async editBook(bookID, createBookDTO: CreateBookDTO): Promise<Book> {
    const editedBook = await this.bookModel.findByIdAndUpdate(
      bookID,
      createBookDTO,
      { new: true },
    );
    return editedBook;
  }
  async deleteBook(bookID): Promise<any> {
    const deletedBook = await this.bookModel.findByIdAndRemove(bookID);
    return deletedBook;
  }
}
