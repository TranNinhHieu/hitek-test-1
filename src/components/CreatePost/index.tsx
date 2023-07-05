import { createPost } from '@/api/PostAPI'
import { Button, Stack } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Error } from '@/components'
import { CONSTANTS } from '@/utils/constant'
import classes from './style.module.scss'
import { toast } from 'react-toastify'
import { CustomGoBack } from '../Custom'
import { useRecoilValue } from 'recoil'
import { userStore } from '@/store/state'
function CreatePost() {
	const user = useRecoilValue(userStore)
	const { type } = user
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data?: any) => {
		const result = await createPost(data)
		if (result.status === 201) {
			toast.success('Post created successfully')
		} else {
			toast.error('Post creation failed')
		}
	}
	return (
		<>
			<CustomGoBack />
			{type === 'admin' ? (
				<Stack spacing={2} className={classes.wrapper}>
					<h1 style={{ textAlign: 'center' }}>Create Post</h1>

					<form
						onSubmit={handleSubmit(onSubmit)}
						style={{ display: 'flex', justifyContent: 'center' }}
					>
						<Stack spacing={2} className={classes.formContainer}>
							<h2>Title</h2>
							<input type="text" {...register('title', { required: true })} />
							{errors.title && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${
										errors.title.message
											? errors.title.message
											: errors.title.type
									}`}
								/>
							)}
							<h2>Content</h2>
							<textarea
								style={{ resize: 'vertical' }}
								{...register('content', { required: true })}
							/>
							{errors.content && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${
										errors.content.message
											? errors.content.message
											: errors.content.type
									}`}
								/>
							)}
							<h2>Image URL</h2>
							<input type="text" {...register('image', { required: true })} />
							{errors.image && (
								<Error
									content={`${CONSTANTS.PREFIXERROR} ${
										errors.image.message
											? errors.image.message
											: errors.image.type
									}`}
								/>
							)}
							<Stack alignItems="center">
								<Button
									variant="contained"
									color="success"
									type="submit"
									sx={{ width: '50px' }}
								>
									Submit
								</Button>
							</Stack>
						</Stack>
					</form>
				</Stack>
			) : (
				<h1 style={{ textAlign: 'center' }}>This Page Only Admin Access</h1>
			)}
		</>
	)
}

export default CreatePost
