import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolService } from './usuario/rol/rol.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
	imports: [ TypeOrmModule.forRoot(), UsuarioModule ],
	controllers: [ AppController ],
	providers: [ AppService, RolService ]
})
export class AppModule {}
