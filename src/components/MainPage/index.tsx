/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import classes from './style.module.scss'
import { useRouter } from 'next/router'
import {
	CustomFormUpdate,
	CustomGoBack,
	CustomGridData,
	CustomPageNation,
	CustomPopup,
} from '@/components/Custom'
import { getListByPage } from '@/api/PostAPI'
import { ListPost, Post } from '@/types/models/post'
import { deletePostById } from '@/api/PostAPI'
import { POST_API_ROUTES } from '@/utils/routers'
import { userStore } from '@/store/state'
import { useRecoilValue } from 'recoil'
import { toast } from 'react-toastify'

function MainPage() {
	const router = useRouter()
	const { page } = router.query
	const userState = useRecoilValue(userStore)
	const [listPost, setListPost] = useState<ListPost>()
	const [open, setOpen] = useState<boolean>(false)
	const [openFormUpdate, setOpenFormUpdate] = useState<boolean>(false)
	const [deletePost, setDeletePost] = useState<boolean>(false)
	const [idSelected, setIdSelected] = useState<any>('')
	const [item, setItem] = useState<Post>({})
	const fetchListPostByPage = async () => {
		const res: ListPost = await getListByPage({
			_page: page,
			_limited: 50,
			_sort: 'createdAt',
			_order: 'desc',
		})

		const currentData = {
			...res,
			data: res?.data?.map((item, index) => ({
				...item,
				no: index + 1,
			})),
		}
		setListPost(currentData)
	}

	const handleDeletePost = async (idSelected: any) => {
		const res = await deletePostById(idSelected)
		await fetchListPostByPage()
		if (res.status === 200) {
			toast.success('This post was successfully deleted')
		}
	}
	const handleOnChangePage = (pageChange: number) => {
		router.push(`?page=${pageChange}`)
	}

	const handleShowDetail = (row: any) => {
		router.push(`${POST_API_ROUTES.POST_BY_ID}/${row.id}`)
	}

	const handleConfirmDelete = (id: any) => {
		setOpen(true)
		setIdSelected(id)
	}

	const handleUpdate = (row: any) => {
		setOpenFormUpdate(true)
		setItem(row)
	}

	useEffect(() => {
		page && fetchListPostByPage()
		console.log(userState)
	}, [page])
	useEffect(() => {
		if (deletePost === true) {
			handleDeletePost(idSelected)
		}
		setIdSelected('')
		setDeletePost(false)
	}, [deletePost])
	return (
		<>
			{' '}
			<CustomGoBack />
			{page && (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>
						<CustomGridData
							rows={listPost?.data || []}
							handleShowDetail={handleShowDetail}
							handleConfirmDelete={handleConfirmDelete}
							handleUpdate={handleUpdate}
							typeUser={userState.type}
						/>
					</div>
					<div className={classes.pageNation}>
						<CustomPageNation
							count={Number(listPost?.pagination?._totalPages)}
							page={Number(page)}
							handleOnChangePage={handleOnChangePage}
						/>
					</div>
					<CustomPopup
						open={open}
						setOpen={setOpen}
						setDeletePost={setDeletePost}
					/>
					<CustomFormUpdate
						openFormUpdate={openFormUpdate}
						setOpenFormUpdate={setOpenFormUpdate}
						fetchListPostByPage={fetchListPostByPage}
						item={item}
					/>
				</div>
			)}
		</>
	)
}

export default MainPage
