import React from 'react'
import classes from './style.module.scss'
import { Stack, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Error } from '@/components'
import { login } from '@/api/AuthAPI'
import { userStore } from '@/store/state'
import { useSetRecoilState } from 'recoil'
import { toast } from 'react-toastify'

function Login() {
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
				console.log(res)
				// const userInfo = res
				// delete userInfo.status
				setUser(res)
				toast.success('Login successful')
			}
		} catch (error: any) {
			alert(error?.message)
		}
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Stack className={classes.leftContainer} spacing={2}>
					<div className={classes.title}>HELLO MY FRIEND</div>
					<div>Welcome to my project</div>
					<Button className={classes.buttonToSignUp} color="inherit">
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
							/>
							{errors.userName && <Error />}
							<div>Password</div>

							<input
								className={classes.inputPassword}
								type="password"
								{...register('password', { required: true })}
							/>
							{errors.password && <Error />}
							<Button
								className={classes.buttonSignIn}
								style={{ color: 'white' }}
								type="submit"
							>
								LOG IN
							</Button>
						</form>
					</Stack>
				</div>
			</div>
		</div>
	)
}

export default Login
