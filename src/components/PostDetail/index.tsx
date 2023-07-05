/* eslint-disable @next/next/no-img-element  */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getPostById } from '@/api/PostAPI'
import { Post } from '@/types/models/post'
import { convertMillisecondsToDateTime } from '@/utils/convert'
import { Stack } from '@mui/material'
import classes from './style.module.scss'
import { CustomGoBack } from '../Custom'

function PostDetail() {
	const router = useRouter()
	const [data, setData] = useState<Post>({})
	const { id } = router.query
	const fetchGetPostById = async () => {
		const res: Post = await getPostById(id)
		setData(res)
	}
	useEffect(() => {
		fetchGetPostById()
	}, [id])
	return (
		<>
			<CustomGoBack />
			<Stack justifyContent="center" alignItems="center" spacing={2}>
				<img className={classes.image} src={data.image} alt="Image" />
				<h1>{data.title}</h1>
				<div style={{ textAlign: 'justify' }}>{data.content}</div>
				<div>Created at: {convertMillisecondsToDateTime(data.updatedAt)}</div>
				<div>Updated at: {convertMillisecondsToDateTime(data.updatedAt)}</div>
			</Stack>
		</>
	)
}

export default PostDetail
