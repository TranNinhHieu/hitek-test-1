import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'

function CustomGoBack() {
	const router = useRouter()
	const handleGoBack = () => {
		router.back()
	}

	return (
		<Button variant="contained" onClick={handleGoBack} sx={{ margin: '10px' }}>
			{'<'} Go Back
		</Button>
	)
}

export default CustomGoBack
