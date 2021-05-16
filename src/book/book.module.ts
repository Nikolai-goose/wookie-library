import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { BookSchema } from './schemas/book.schema'; // and this

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])], // add
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
