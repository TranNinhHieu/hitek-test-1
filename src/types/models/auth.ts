import { UserModal } from './user'

export type AuthModel = {
	email: string
	password: string
}

export type AuthResponse = {
	status: {
		code: number
		msg: string
	}
	results: {
		row: UserModal
		accessToken: string
	}
}

export type RegisterModel = {
	password: string
	type: string
	userName: string
	confirmPassword: string
}
