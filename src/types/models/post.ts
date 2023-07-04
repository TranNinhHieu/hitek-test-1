import { Dispatch, SetStateAction } from 'react'

export type Post = {
	no?: number
	id?: string
	title?: string
	content?: string
	updatedAt?: string
	image?: string
}

export type ListPost = {
	data: Post[]
	pagination: {
		_totalPages: number
		_totalItems: number
	}
}
export interface FunctionHandle {
	handleShowDetail: (pageChange: number) => void
	handleConfirmDelete: (pageChange: number) => void
	handleUpdate: (pageChange: number) => void
	typeUser: string
}
export interface CustomGridDataProps extends FunctionHandle {
	rows: Post[]
}

export interface CustomPageNationProps {
	count: number
	page: number
	handleOnChangePage: (pageChange: number) => void
}

export type StatePopup = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	setDeletePost: Dispatch<SetStateAction<boolean>>
}
export type StateForm = {
	openFormUpdate: boolean
	setOpenFormUpdate: Dispatch<SetStateAction<boolean>>
	item: Post
	fetchListPostByPage: () => void
}
