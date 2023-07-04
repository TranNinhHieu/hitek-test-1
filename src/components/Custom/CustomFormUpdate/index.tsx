import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import { Box, Button, Stack } from '@mui/material'
import { Post, StateForm } from '@/types/models/post'
import { useForm } from 'react-hook-form'
import classes from './style.module.scss'
import { updatePostById } from '@/api/PostAPI'
import { toast } from 'react-toastify'
export default function CustomFormUpdate({
	openFormUpdate,
	setOpenFormUpdate,
	item,
	fetchListPostByPage,
}: StateForm) {
	const { handleSubmit } = useForm()
	const [dataUpdate, setDataUpdate] = useState<Post>({})
	const handleClose = () => setOpenFormUpdate(false)
	const onSubmit = async () => {
		const data = {
			title: dataUpdate.title,
			content: dataUpdate.content,
			image: dataUpdate.image,
		}
		const res = await updatePostById(dataUpdate.id, data)
		if (res?.status === 200) {
			fetchListPostByPage()
			toast.success('Update success')
		} else {
			toast.error('Error updating')
		}
	}
	const handleOnChange = (state: string, e: any) => {
		setDataUpdate((pre) => ({ ...pre, [state]: e }))
	}
	useEffect(() => {
		setDataUpdate(item)
	}, [item])
	return (
		<div>
			<Modal
				open={openFormUpdate}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className={classes.wrapper}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack className={classes.formContainer} spacing={2}>
						<h1 style={{ textAlign: 'center' }}>UPDATE POST FORM</h1>
						<div className={classes.label}>Title:</div>
						<input
							className={classes.inputForm}
							type="text"
							value={dataUpdate.title}
							onChange={(e) => handleOnChange('title', e.target.value)}
						/>
						<div className={classes.label}>Content:</div>
						<textarea
							className={classes.textareaForm}
							value={dataUpdate.content}
							onChange={(e) => handleOnChange('content', e.target.value)}
						></textarea>
						<div className={classes.label}>Image URL:</div>
						<input
							className={classes.inputForm}
							type="text"
							value={dataUpdate.image}
							onChange={(e) => handleOnChange('image', e.target.value)}
						/>
						<Box display="flex" justifyContent="center" alignItems="center">
							<Button
								variant="contained"
								color="success"
								type="submit"
								sx={{ width: '100px' }}
							>
								Submit
							</Button>
						</Box>
					</Stack>
				</form>
			</Modal>
		</div>
	)
}
