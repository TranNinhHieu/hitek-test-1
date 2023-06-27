import BaseLayout from '@/layouts/BaseLayout'
import { ListData } from '@/utils/mockData'
import { Col, Divider, List, Row } from 'antd'
// import classes from './style.module.scss'
import axios from 'src/axios'
export default function Home() {
	const a = async () => {
		const res = await axios.get('/users')
		console.log('res', res)
	}
	a()
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
