import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';
import { CreateRolDto } from './dto/create-rol-dto';

@Injectable()
export class RolService {
	constructor(@InjectRepository(Rol) private readonly rolRepository: Repository<Rol>) {}

	async getAllRol(): Promise<Rol[]> {
		return await this.rolRepository.find();
	}

	async getRol(IdRol: string): Promise<Rol> {
		return await this.rolRepository.findOne(IdRol);
	}

	async createRol(rolNuevo: CreateRolDto): Promise<Rol> {
		const nuevo = new Rol();
		nuevo.IdRol = rolNuevo.IdRol;
		nuevo.NombreRol = rolNuevo.NombreRol;
		return await this.rolRepository.save(nuevo);
	}

	async updateRol(IdRol: string, rolUpdate: CreateRolDto): Promise<Rol> {
		const updateRol = await this.rolRepository.findOne(IdRol);
		updateRol.IdRol = rolUpdate.IdRol;
		updateRol.NombreRol = rolUpdate.NombreRol;
		return await this.rolRepository.save(updateRol);
	}

	async deleteRol(IdRol: string) {
		return await this.rolRepository.delete(IdRol);
	}
}
