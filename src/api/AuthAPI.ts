import axios from '@/axios'
// import { exportResults } from '@/utils/api'
import { AUTH_API_ROUTES } from '@/utils/routers'

export const login = async (payload: { userName: string; password: string }) =>
	// exportResults(await axios.post(AUTH_API_ROUTES.AUTH_LOGIN, payload))
	{
		try {
			// exportResults(await axios.post(AUTH_API_ROUTES.AUTH_LOGIN, payload))
			const res = await axios.post(AUTH_API_ROUTES.AUTH_LOGIN, payload)
			return res.data
		} catch (error: any) {
			console.log(error)
			throw new Error(String(error?.response?.data?.message))
		}
	}
