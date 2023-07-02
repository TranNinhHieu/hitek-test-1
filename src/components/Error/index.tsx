import React from 'react'
import classes from './style.module.scss'
const Error: React.FC<{ content?: string }> = ({
	content = 'This field is required',
}) => <div className={classes.error}>* {content}</div>

export default Error
