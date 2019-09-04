import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol-dto';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
	constructor(private rolServices: RolService) {}

	@Get()
	getAllRol(@Res() res) {
		this.rolServices
			.getAllRol()
			.then((msj) => {
				res.status(HttpStatus.CREATED).json(msj);
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: 'Error al Listar Los Roles' });
			});
	}

	@Get(':IdRol')
	getRol(@Param('IdRol') IdRol: string, @Res() res) {
		this.rolServices
			.getRol(IdRol)
			.then((msj) => {
				res.status(HttpStatus.CREATED).json(msj);
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: `Error al Traer rl Rol de ID #${IdRol}` });
			});
	}

	@Post()
	createRol(@Body() createRolDto: CreateRolDto, @Res() res) {
		this.rolServices
			.createRol(createRolDto)
			.then((msj) => {
				res.status(HttpStatus.CREATED).json(msj);
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: `Error al Crear el Rol  #${createRolDto.NombreRol}` });
			});
	}

	@Put(':IdRol')
	updateRol(@Param('IdRol') IdRol: string, @Body() updateRolDto: CreateRolDto, @Res() res) {
		this.rolServices
			.updateRol(IdRol, updateRolDto)
			.then((msj) => {
				res.status(HttpStatus.CREATED).json(msj);
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: `Error al Actualizar el Rol  #${updateRolDto.NombreRol}` });
			});
	}

	@Delete(':IdRol')
	deleteRol(@Param('IdRol') IdRol: string, @Res() res) {
		this.rolServices
			.deleteRol(IdRol)
			.then((msj) => {
				res.status(HttpStatus.CREATED).json(msj);
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: `Error al Eliminar el Rol #${IdRol}` });
			});
	}
}
