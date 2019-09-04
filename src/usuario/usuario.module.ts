import { Module } from '@nestjs/common';
import { RolController } from './rol/rol.controller';
import { RolService } from './rol/rol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol/entities/rol.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ Rol ]) ],
	exports: [ TypeOrmModule ],
	controllers: [ RolController ],
	providers: [ RolService ]
})
export class UsuarioModule {}
