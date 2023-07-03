import axios from '@/axios'
import { AUTH_API_ROUTES } from '@/utils/routers'
import { APILogin, APISignUp } from '@/utils/api'

export const login = async (payload: APILogin) => {
	try {
		const res = await axios.post(AUTH_API_ROUTES.AUTH_LOGIN, payload)
		return res.data
	} catch (error: any) {
		console.log(error)
		throw new Error(String(error?.response?.data?.message))
	}
}

export const signUp = async (payload: APISignUp) => {
	try {
		const res = await axios.post(AUTH_API_ROUTES.AUTH_REGISTER, payload)
		return res.data
	} catch (error: any) {
		console.log(error)
		throw new Error(String(error?.response?.data?.message))
	}
}
