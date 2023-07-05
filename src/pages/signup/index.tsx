/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PermissionLayout from '@/layouts/PermissionLayout'
import { SignUp } from '@/components'

export default function LoginPage() {
	return (
		<PermissionLayout>
			<SignUp />
		</PermissionLayout>
	)
}
