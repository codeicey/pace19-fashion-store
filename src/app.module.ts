import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ProductModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports:[PrismaService]
})
export class AppModule {}
