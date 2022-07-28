import { ICategory } from './category';

export interface IImage {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: any;
	filePath: string;
	url: string;
	publicId: string;
	secureUrl: string;
}

export interface IProduct {
	categoryId: string;
	createdAt: Date;
	deletedAt?: Date;
	description: string;
	id: string;
	imageId?: string;
	name: string;
	price: number;
	updatedAt: Date;
	category: ICategory;
	image: IImage;
}

export interface IProductResponse {
	success: boolean;
	products: [IProduct];
}
