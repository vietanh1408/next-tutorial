export interface ICategory {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
	name: string;
	image?: string;
	description?: string;
}
