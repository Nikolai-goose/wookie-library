import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { BookModule } from './book/book.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-wookie-library', {
      useNewUrlParser: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
