/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PermissionLayout from '@/layouts/PermissionLayout'
import { Login } from '@/components'

export default function LoginPage() {
	return (
		<PermissionLayout>
			<Login />
		</PermissionLayout>
	)
}
