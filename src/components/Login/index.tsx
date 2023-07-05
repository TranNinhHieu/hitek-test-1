import React from 'react'
import classes from './style.module.scss'
import { Stack, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Error } from '@/components'
import { login } from '@/api/AuthAPI'
import { userStore } from '@/store/state'
import { useSetRecoilState } from 'recoil'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routers'
import { CONSTANTS } from '@/utils/constant'
function Login() {
	const router = useRouter()
	const setUser = useSetRecoilState(userStore)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = async (data?: any) => {
		try {
			const res = await login(data)
			if (res) {
				setUser(res)
				toast.success('Login successful')
			}
		} catch (error: any) {
			alert(error?.message || 'Errors')
		}
	}
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Stack className={classes.leftContainer} spacing={2}>
					<div className={classes.title}>HELLO MY FRIEND</div>
					<div>Welcome to my project</div>
					<Button
						className={classes.buttonToSignUp}
						color="inherit"
						onClick={() => router.push(`${ROUTES.SIGNUP}`)}
					>
						Sign Up
					</Button>
				</Stack>
				<div className={classes.rightContainer}>
					<Stack>
						<div className={classes.title}>LOG IN TO PAGE</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={classes.formSubmit}
						>
							<div>User Name</div>
							<input
								className={classes.inputUser}
								type="text"
								{...register('userName', { required: true })}
								pattern={CONSTANTS.PATTERN}
								title={CONSTANTS.TITLE}
							/>
							{errors.userName && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${errors.userName.type}`}
								/>
							)}
							<div>Password</div>

							<input
								className={classes.inputPassword}
								type="password"
								{...register('password', { required: true })}
								pattern={CONSTANTS.PATTERN}
								title={CONSTANTS.TITLE}
							/>
							{errors.password && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${errors.password.type}`}
								/>
							)}
							<Button
								className={classes.buttonSignIn}
								style={{ color: 'white' }}
								type="submit"
							>
								LOG IN
							</Button>
						</form>
						<br />
						<div
							onClick={() => router.push(`${ROUTES.SIGNUP}`)}
							style={{
								textAlign: 'center',
								textDecoration: 'underline',
								cursor: 'pointer',
							}}
						>
							sign up
						</div>
					</Stack>
				</div>
			</div>
		</div>
	)
}

export default Login
