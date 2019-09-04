import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolService } from './usuario/rol/rol.service';
import { UsuarioModule } from './usuario/usuario.module';
import { Rol } from './usuario/rol/entities/rol.entity';
import { join } from 'path';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'Passw0rd!!',
			database: 'app',
			entities: [ join(__dirname, '**/*.entity{.ts,.js}') ],
			synchronize: false
		}),
		TypeOrmModule.forFeature([ Rol ]),
		UsuarioModule
	],
	controllers: [ AppController ],
	providers: [ AppService, RolService ]
})
export class AppModule {}
