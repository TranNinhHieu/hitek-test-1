import BaseLayout from '@/layouts/BaseLayout'
import { userStore } from '@/store/state'
import { ListData } from '@/utils/mockData'
import { Col, Divider, List, Row } from 'antd'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
// import classes from './style.module.scss'
// import axios from 'src/axios'
export default function Home() {
	const user = useRecoilValue(userStore)
	useEffect(() => {
		console.log(user)
	})
	return (
		<BaseLayout>
			<Row gutter={16}>
				<Col className="gutter-row" span={12}>
					<Divider orientation="left">Default Size</Divider>
					<List
						header={<div>Header</div>}
						footer={<div>Footer</div>}
						bordered
						dataSource={ListData}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Col>
			</Row>
		</BaseLayout>
	)
}
