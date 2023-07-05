import React from 'react'
import classes from './style.module.scss'
import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routers'
import { useForm } from 'react-hook-form'
import { Error } from '@/components'
import { CONSTANTS } from '@/utils/constant'
import { signUp } from '@/api/AuthAPI'
import { toast } from 'react-toastify'

function SignUp() {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const password = watch('password')
	const onSubmit = async (data?: any) => {
		try {
			const res = await signUp(data)
			if (res) {
				toast.success('Sign Up successful')
				setTimeout(() => {
					router.push(ROUTES.LOGIN)
				}, 500)
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
						onClick={() => router.push(`${ROUTES.LOGIN}`)}
					>
						Log In
					</Button>
				</Stack>
				<Stack className={classes.rightContainer}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={classes.formSubmit}
					>
						<Stack>
							<div className={classes.title}>SIGN UP USER</div>
							<div>User Name</div>
							<input
								{...register('userName', { required: true })}
								type="text"
								className={classes.inputUserName}
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
								{...register('password', { required: true })}
								type="password"
								className={classes.inputPassword}
								pattern={CONSTANTS.PATTERN}
								title={CONSTANTS.TITLE}
							/>
							{errors.password && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${errors.password.type}`}
								/>
							)}
							<div>Confirm Password</div>
							<input
								{...register('confirmPassword', {
									required: true,
									validate: (value) =>
										value === password || 'Confirm password does not match',
								})}
								type="password"
								className={classes.inputConfirmPassword}
								pattern={CONSTANTS.PATTERN}
								title={CONSTANTS.TITLE}
							/>
							{errors.confirmPassword && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${
										errors.confirmPassword.message
											? errors.confirmPassword.message
											: errors.confirmPassword.type
									}`}
								/>
							)}

							<div>Account Type</div>
							<Stack direction="row" justifyContent="space-around" margin={2}>
								<Stack direction="row">
									<div>Admin</div>
									<input
										type="radio"
										{...register('type')}
										name="type"
										value="admin"
										defaultChecked={false}
									/>
								</Stack>
								<Stack direction="row">
									<div>Normal</div>
									<input
										type="radio"
										{...register('type')}
										name="type"
										value="normal"
										defaultChecked
									/>
								</Stack>
							</Stack>
							<Button
								className={classes.buttonSignUp}
								style={{ color: 'white' }}
								type="submit"
							>
								Sign Up
							</Button>
						</Stack>
					</form>
					<div
						onClick={() => router.push(`${ROUTES.LOGIN}`)}
						style={{
							textAlign: 'center',
							textDecoration: 'underline',
							marginTop: '10px',
							cursor: 'pointer',
						}}
					>
						log in
					</div>
				</Stack>
			</div>
		</div>
	)
}

export default SignUp
