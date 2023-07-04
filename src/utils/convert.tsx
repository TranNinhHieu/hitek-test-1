import moment from 'moment'

export const slugify = (str: string) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')
export const convertMillisecondsToDateTime = (milliseconds: any): string => {
	if (milliseconds) {
		const date = moment(milliseconds)
		return date.format('YYYY/MM/DD')
	} else return ''
}
