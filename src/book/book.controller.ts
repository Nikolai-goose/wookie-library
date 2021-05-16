import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Query,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // Submit a book
  @Post('/')
  async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
    const newBook = await this.bookService.addBook(createBookDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Book has been submitted successfully!',
      book: newBook,
    });
  }

  // Fetch a particular book using ID
  @Get('/:bookID')
  async getBook(@Res() res, @Param('bookID', new ValidateObjectId()) bookID) {
    const book = await this.bookService.getBook(bookID);
    if (!book) {
      throw new NotFoundException('Book does not exist!');
    }
    return res.status(HttpStatus.OK).json(book);
  }

  // Fetch all books
  @Get('/')
  async getBooks(@Res() res) {
    const books = await this.bookService.getBooks();
    return res.status(HttpStatus.OK).json(books);
  }

  // Edit a particular book using ID
  @Put('/edit')
  async editBook(
    @Res() res,
    @Query('bookID', new ValidateObjectId()) bookID,
    @Body() createBookDTO: CreateBookDTO,
  ) {
    const editedBook = await this.bookService.editBook(bookID, createBookDTO);
    if (!editedBook) {
      throw new NotFoundException('Book does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Book has been successfully updated',
      book: editedBook,
    });
  }
  // Delete a book using ID
  @Delete('/delete')
  async deleteBook(
    @Res() res,
    @Query('bookID', new ValidateObjectId()) bookID,
  ) {
    const deletedBook = await this.bookService.deleteBook(bookID);
    if (!deletedBook) {
      throw new NotFoundException('Book does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Book has been deleted!',
      book: deletedBook,
    });
  }
}
