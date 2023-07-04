import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Stack } from '@mui/material'
import { StatePopup } from '@/types/models/post'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius: '10px',
}

export default function CustomPopup({
	open,
	setOpen,
	setDeletePost,
}: StatePopup) {
	const handleClose = () => setOpen(false)
	const handleConfirm = () => {
		setOpen(false)
		setDeletePost(true)
	}

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Stack sx={style} spacing={2}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						align="center"
					>
						Confirm Delete
					</Typography>
					<Typography
						id="modal-modal-description"
						align="center"
						sx={{ mt: 2 }}
					>
						Do you want to delete this post?
					</Typography>
					<Stack direction="row" justifyContent="space-evenly">
						<Button variant="contained" color="success" onClick={handleClose}>
							No
						</Button>
						<Button variant="contained" color="error" onClick={handleConfirm}>
							Yes
						</Button>
					</Stack>
				</Stack>
			</Modal>
		</div>
	)
}
