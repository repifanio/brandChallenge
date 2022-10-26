import { Module } from '@nestjs/common';
import { ChallengerModule } from './challenger/challenger.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a.123456',
      database: 'brand_challenge',
      autoLoadEntities: true,
      synchronize: true,
      insecureAuth: true,
    }),
    ChallengerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
