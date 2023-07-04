import axios from '@/axios'
// import { APIGetParams, convertParams, exportResults } from '@/utils/api'
import { POST_API_ROUTES } from '@/utils/routers'

export const getListByPage = async (page: any) => {
	try {
		const res = await axios.get(
			`${POST_API_ROUTES.GET_LIST_BY_PAGE}=${Number(
				page,
			)}&_limit=10&_sort=createdAt&_order=desc`,
		)
		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error)
		throw error
	}
}

export const deletePostById = async (id: any) => {
	try {
		await axios.delete(`${POST_API_ROUTES.POST_BY_ID}/${id}`)
	} catch (error: any) {
		console.log(error)
		throw error
	}
}

export const updatePostById = async (id: any, data: any) => {
	try {
		const res = await axios.patch(`${POST_API_ROUTES.POST_BY_ID}/${id}`, data)
		if (res) {
			return res
		}
	} catch (error: any) {
		console.log(error)
		throw error
	}
}

export const getPostById = async (id: any) => {
	try {
		const res = await axios.get(`${POST_API_ROUTES.POST_BY_ID}/${id}`)
		if (res) {
			return res.data
		}
	} catch (error: any) {
		console.log(error)
		throw error
	}
}
