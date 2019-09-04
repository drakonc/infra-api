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
		const buscar = await this.rolRepository.findOne(IdRol);
		if (buscar) return buscar;
		else return null;
	}

	async createRol(rolNuevo: CreateRolDto): Promise<Rol> {
		const buscar = await this.getRol(rolNuevo.IdRol);
		if (buscar) {
			return null;
		} else {
			const nuevo = new Rol();
			nuevo.IdRol = rolNuevo.IdRol;
			nuevo.NombreRol = rolNuevo.NombreRol;
			const result = await this.rolRepository.save(nuevo);
			return result;
		}
	}

	async updateRol(IdRol: string, rolUpdate: CreateRolDto): Promise<Rol> {
		const updateRol = await this.getRol(IdRol);
		if (updateRol) {
			updateRol.IdRol = rolUpdate.IdRol;
			updateRol.NombreRol = rolUpdate.NombreRol;
			const result = await this.rolRepository.save(updateRol);
			return result;
		} else return null;
	}

	async deleteRol(IdRol: string): Promise<number> {
		const result = await this.rolRepository.delete(IdRol);
		const status = result.affected;
		return status;
	}
}
