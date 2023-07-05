import { MenuProps } from 'antd'
import Link from 'next/link'
import { ROUTES } from './routers'

export const MenuData: MenuProps['items'] = [
	{
		label: <Link href={ROUTES.HOME}>Home</Link>,
		key: 'home',
	},
	{
		label: <Link href={ROUTES.CREATEPOSTS}>Create Post</Link>,
		key: 'createPost',
	},
	{
		label: <Link href={`${ROUTES.POSTS}?page=1`}>Posts</Link>,
		key: 'posts',
	},
	{
		label: <Link href={ROUTES.LOGIN}>Login</Link>,
		key: 'login',
	},
]

export const ListData = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
]
