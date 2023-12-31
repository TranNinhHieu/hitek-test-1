/* eslint-disable react-hooks/exhaustive-deps */
import { userStore } from '@/store/state'
import { BaseLayoutProps } from '@/types/layouts'
import { MenuData } from '@/utils/mockData'
import { Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import classes from './index.module.scss'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routers'

const { Header, Content, Footer } = Layout

export default function BaseLayout({ children }: BaseLayoutProps) {
	const [menuState, setMenuState] = useState() as any
	const router = useRouter()
	const userState = useRecoilValue(userStore)
	const setUserState = useSetRecoilState(userStore)
	const renderMenu = MenuData?.filter((item: any) => item.key !== 'login')

	useEffect(() => {
		setMenuState(
			userState?.id
				? renderMenu &&
						renderMenu.concat({
							label: (
								<span
									onClick={() => {
										setUserState({
											id: '',
											type: '',
											userName: '',
											token: '',
										})
									}}
								>
									Logout
								</span>
							),
							key: 'logout',
						})
				: MenuData,
		)
	}, [userState])
	if (typeof window !== 'undefined') {
		if (!userState.id) {
			router.push(ROUTES.LOGIN)
		}
	}

	return (
		<Layout className={classes.layout} id="layout">
			<Header className={classes.header}>
				<div className="logo" />
				<Menu
					className={classes.menu}
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={menuState}
				/>
			</Header>
			<Content id="siteLayoutContent">{children}</Content>

			<Footer className={classes.footer}>
				This is a non-commercial product{' '}
			</Footer>
		</Layout>
	)
}
