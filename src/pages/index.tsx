import BaseLayout from '@/layouts/BaseLayout'
import { ROUTES } from '@/utils/routers'
import { Button, Stack } from '@mui/material'
import { useRouter } from 'next/router'
export default function Home() {
	const router = useRouter()
	return (
		<BaseLayout>
			<Stack spacing={2} alignItems="center">
				<Button
					variant="contained"
					onClick={() => router.push(`${ROUTES.POSTS}?page=1`)}
					sx={{ width: '200px' }}
				>
					Go Post List
				</Button>
				<Button
					variant="contained"
					onClick={() => router.push(`${ROUTES.CREATEPOSTS}`)}
					sx={{ width: '200px' }}
				>
					Go Create Post
				</Button>
			</Stack>
		</BaseLayout>
	)
}
