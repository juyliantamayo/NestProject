import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomovilModule } from './automovil/automovil.module';

@Module({
  imports: [
    AutomovilModule,
    MongooseModule.forRoot(
      'mongodb+srv://FredyMontano:Gotsiw_092100@cluster0.u3r1d5z.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
