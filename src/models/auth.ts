export interface ILoginPayload {
	username: string;
	password: string;
}

export interface IRegisterPayload {
	username: string;
	email: string;
	password: string;
}

export interface IProfile {
	createdAt: Date;
	deletedAt?: Date | null;
	email?: string | null;
	id: string;
	password: string;
	role: number;
	updatedAt: Date;
	username: string;
}

export interface IProfileResponse {
	success: boolean;
	user: IProfile;
}
