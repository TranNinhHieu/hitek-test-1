/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PermissionLayout from '@/layouts/PermissionLayout'
import { SignUp } from '@/components'
// import { userStore } from '@/store/state'
// import { ROUTES } from '@/utils/routers'
// import { useRouter } from 'next/router'
// import { useSetRecoilState } from 'recoil'
// import classes from './style.module.scss'
// import Image from 'next/image'
// import { signIn, signOut, useSession } from 'next-auth/react'
// import { useForm } from 'react-hook-form'
// import { Modal } from 'antd'
// import * as AuthAPI from '@/api/AuthAPI'
// import { AuthResponse } from '@/types/models/auth'

// interface FormData {
// 	email: string
// 	password: string
// }

export default function LoginPage() {
	// const router = useRouter()
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<FormData>({
	// 	defaultValues: {
	// 		email: '',
	// 		password: '',
	// 	},
	// })
	// const setUserState = useSetRecoilState(userStore)
	// const { data: session, status } = useSession()

	// const onSubmit = async (data: FormData) => {
	// 	try {
	// 		const res: AuthResponse = await AuthAPI.login({
	// 			email: data.email,
	// 			password: data.password,
	// 		})
	// 		const { id, first_name, last_name, is_admin, phone, email, username } =
	// 			res?.results?.row
	// 		const token = res?.results.accessToken
	// 		setUserState({
	// 			id,
	// 			first_name,
	// 			last_name,
	// 			is_admin,
	// 			phone,
	// 			email,
	// 			username,
	// 			token,
	// 		})
	// 		setTimeout(() => {
	// 			router.push(ROUTES.HOME)
	// 		}, 500)
	// 	} catch (error) {
	// 		Modal.error({
	// 			title: 'Error',
	// 			content: 'Your account do not correct!',
	// 		})
	// 	}
	// }

	// if (status === 'loading') {
	// 	return null
	// }

	// if (session) {
	// 	return (
	// 		<>
	// 			<Image
	// 				src={session?.user?.image || ''}
	// 				alt="avatar"
	// 				width={25}
	// 				height={25}
	// 				className="h-48 w-48 rounded-full"
	// 			/>
	// 			<br />
	// 			Signed in as {session?.user?.email} <br />
	// 			<button onClick={() => signOut()}>Sign Out</button>
	// 		</>
	// 	)
	// }

	return (
		<PermissionLayout>
			<SignUp />
		</PermissionLayout>
	)
}
