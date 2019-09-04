import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Rol {
	@PrimaryColumn({ length: 20, nullable: false })
	IdRol: string;

	@Column({ length: 50, nullable: false })
	NombreRol: string;

	@Column() created_at: Date;
}
