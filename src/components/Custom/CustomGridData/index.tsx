import { DataGrid } from '@mui/x-data-grid'
import { CustomGridDataProps } from '@/types/models/post'
import { columns } from './columnGridData'
const CustomGridData: React.FC<CustomGridDataProps> = ({
	rows,
	handleShowDetail,
	handleConfirmDelete,
	handleUpdate,
	typeUser,
}) => {
	return (
		<div
			style={{
				height: '700px',
				width: '100%',
				margin: '10px',
				background: 'white',
			}}
		>
			<DataGrid
				columns={columns({
					handleShowDetail,
					handleConfirmDelete,
					handleUpdate,
					typeUser,
				})}
				rows={rows || []}
				rowHeight={120}
				hideFooter
				sx={{
					'& .MuiDataGrid-cell': {
						borderRight: 1,
						// add more css for customization
					},
				}}
			/>
		</div>
	)
}

export default CustomGridData
