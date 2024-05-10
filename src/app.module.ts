import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONTROLLERS } from './controllers';
import { SERVICES } from './services';
import { ENTITIES } from './domain';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '1234',
      database: 'InventoryDB',
      entities: [...ENTITIES],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([...ENTITIES]),
  ],
  providers: [...SERVICES],
  exports: [...SERVICES],
  controllers: [...CONTROLLERS],
})
export class AppModule {}
