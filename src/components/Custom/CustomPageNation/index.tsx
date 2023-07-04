import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { CustomPageNationProps } from '@/types/models/post'

const CustomPageNation: React.FC<CustomPageNationProps> = ({
	count,
	page,
	handleOnChangePage,
}) => {
	return (
		<Stack spacing={2}>
			<Pagination
				count={count || 0}
				defaultPage={1}
				page={page || 0}
				siblingCount={0}
				onChange={(_, pageChange) => handleOnChangePage(pageChange)}
			/>
		</Stack>
	)
}

export default CustomPageNation
