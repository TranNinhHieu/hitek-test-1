import axios from '@/axios'
import { APIPost } from '@/utils/api'
import { convertParamsToQuery } from '@/utils/convert'
import { POST_API_ROUTES } from '@/utils/routers'

export const getListByPage = async (...params: any[]) => {
	const query = convertParamsToQuery(params[0])
	try {
		const res = await axios.get(`${POST_API_ROUTES.GET_LIST_BY_PAGE}${query}`)
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
		const res = await axios.delete(`${POST_API_ROUTES.POST_BY_ID}/${id}`)
		return res
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

export const createPost = async (payload: APIPost) => {
	try {
		const res = await axios.post(POST_API_ROUTES.CREATEPOSTS, payload)
		return res
	} catch (error: any) {
		console.log(error)
		throw error
	}
}
