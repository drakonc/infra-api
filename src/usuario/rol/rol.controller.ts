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
				if (msj.length > 0)
					res.status(HttpStatus.CREATED).json(msj); //Se Listan los Elementos
				else res.status(HttpStatus.FORBIDDEN).json(msj); //No Hay Roles Creados
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: -1 }); //Error
			});
	}

	@Get(':IdRol')
	getRol(@Param('IdRol') IdRol: string, @Res() res) {
		this.rolServices
			.getRol(IdRol)
			.then((msj) => {
				if (msj) res.status(HttpStatus.CREATED).json(msj);
				else res.status(HttpStatus.FORBIDDEN).json({ IdRol: '', NombreRol: '', created_at: null }); //No Hay Rol Creados
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: -1 }); //Error
			});
	}

	@Post()
	createRol(@Body() createRolDto: CreateRolDto, @Res() res) {
		this.rolServices
			.createRol(createRolDto)
			.then((msj) => {
				if (msj != null)
					res.status(HttpStatus.CREATED).json(msj); //Se Creo Correctamente
				else res.status(HttpStatus.FORBIDDEN).json({ IdRol: '', NombreRol: '', created_at: null }); //Ya Existe El Rol
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: -1 }); //Error
			});
	}

	@Put(':IdRol')
	updateRol(@Param('IdRol') IdRol: string, @Body() updateRolDto: CreateRolDto, @Res() res) {
		this.rolServices
			.updateRol(IdRol, updateRolDto)
			.then((msj) => {
				if (msj != null)
					res.status(HttpStatus.CREATED).json(msj); //Se Actualizo Correctamente
				else res.status(HttpStatus.FORBIDDEN).json({ IdRol: '', NombreRol: '', created_at: null }); //Error Al Actualizar No Existe
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: -1 }); //Error
			});
	}

	@Delete(':IdRol')
	deleteRol(@Param('IdRol') IdRol: string, @Res() res) {
		this.rolServices
			.deleteRol(IdRol)
			.then((msj) => {
				if (msj > 0)
					res.status(HttpStatus.CREATED).json({ msj: 1 }); //Se Elimino El Archivo
				else res.status(HttpStatus.FORBIDDEN).json({ msj: 0 }); //No se Elimino ya que no se Encontro
			})
			.catch(() => {
				res.status(HttpStatus.FORBIDDEN).json({ msj: -1 }); //Error
			});
	}
}
