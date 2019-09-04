import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Rol {
	@PrimaryColumn({ length: 20, nullable: false })
	IdRol: string;

	@Column({ length: 50, nullable: false })
	NombreRol: string;

	@CreateDateColumn() created_at: Date;
}
