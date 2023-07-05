/* eslint-disable @next/next/no-img-element */

import { GridCellParams, GridColDef } from '@mui/x-data-grid'
import { convertMillisecondsToDateTime } from '@/utils/convert'
import classes from './style.module.scss'
import { Button, Stack } from '@mui/material'
import { FunctionHandle } from '@/types/models/post'

export const columns = ({
	handleShowDetail,
	handleConfirmDelete,
	handleUpdate,
	typeUser,
}: FunctionHandle): GridColDef[] => [
	{
		field: 'no',
		headerAlign: 'center',
		headerName: 'No',
		width: 1,
	},
	{
		field: 'title',
		headerAlign: 'center',
		headerName: 'Title',
		minWidth: 150,
		flex: 1,
	},
	{
		field: 'content',
		headerAlign: 'center',
		headerName: 'content',
		minWidth: 250,
		flex: 2,
	},
	{
		field: 'image',
		headerAlign: 'center',
		headerName: 'Image',
		minWidth: 200,
		flex: 1,
		renderCell: (params) => (
			<div className={classes.customRenderCell}>
				<img
					style={{ width: '180px', height: '108px' }}
					src={params.row.image}
					alt="Image"
				/>
			</div>
		),
	},
	{
		field: 'createdAt',
		headerAlign: 'center',
		headerName: 'Created At',
		minWidth: 150,
		renderCell: (params) => (
			<div>{convertMillisecondsToDateTime(params.row.createdAt)}</div>
		),
	},
	{
		field: 'updatedAt',
		headerAlign: 'center',
		headerName: 'Updated At',
		minWidth: 150,
		renderCell: (params) => (
			<div>{convertMillisecondsToDateTime(params.row.updatedAt)}</div>
		),
	},
	{
		field: 'actions',
		headerAlign: 'center',
		headerName: 'Actions',
		minWidth: 300,
		renderCell: (params: GridCellParams) => (
			<>
				<Stack direction="row" spacing={2} justifyContent="center" width="100%">
					<Button
						variant="contained"
						color="success"
						className={classes.customButtonEdit}
						onClick={() => handleShowDetail(params.row)}
					>
						Detail
					</Button>
					{typeUser === 'admin' && (
						<>
							<Button
								variant="contained"
								className={classes.customButtonUpdate}
								onClick={() => handleUpdate(params.row)}
							>
								Update
							</Button>
							<Button
								color="error"
								variant="contained"
								className={classes.customButtonDelete}
								onClick={() => handleConfirmDelete(params.row.id)}
							>
								Delete
							</Button>
						</>
					)}
				</Stack>
			</>
		),
	},
]
