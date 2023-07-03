export type FilterParams = {
	user_id?: string
	$or?: Array<FilterParams>
	$and?: Array<FilterParams>
	$contains?: Array<FilterParams>
	shop_id?: string
	[key: string]: any
}

export type APIGetParams = {
	fields?: string
	filter?: FilterParams
	order?: any
	limit?: number
	page?: number
}
export type APILogin = {
	userName: string
	password: string
}
export type APISignUp = {
	password: string
	type: string
	userName: string
	confirmPassword: string
}
export const exportResults = (res: any) => res.data

export const convertParams = (params: { [key: string]: any }) => {
	return Object.fromEntries(
		Object.entries(params).map(([key, value]) => [key, value]),
	)
}
