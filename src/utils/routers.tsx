export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	PRODUCTS: '/products',
	PRODUCT: '/product/:id',
	LOGIN: '/login',
	CONTACT: '/contact',
	BLOGS: '/blogs',
	BLOG: '/blog/:id',
	PROFILE: '/profile',
	SIGNUP: '/signup',
	POSTS: '/posts',
	CREATEPOSTS: '/posts/create',
}

export const USER_API_ROUTES = {
	USERS: '/api/users',
	USER_DELETE: '/:id',
	USER_FIND_BY_ID: '/:id',
	USER_GET_LIST: '/',
}

export const AUTH_API_ROUTES = {
	AUTH_REGISTER: '/register',
	AUTH_LOGIN: '/login',
}

export const BLOG_API_ROUTES = {
	BLOGS: '/blogs',
	GET_LIST: '/posts',
	CREATE: '/',
	FIND_BY_ID: '/:id',
	PATCH: '/:id',
	DELETE: '/:id',
}
export const POST_API_ROUTES = {
	GET_LIST_BY_PAGE: '/posts?',
	POST_BY_ID: '/posts',
	CREATEPOSTS: '/posts',
}
