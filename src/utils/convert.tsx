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
		return date.format('YYYY/MM/DD hh:ss')
	} else return ''
}

export function convertParamsToQuery(...params: any[]) {
	const queryString = params
		.map((param) =>
			Object.entries(param)
				.map(
					([key, value]) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
				)
				.join('&'),
		)
		.join('&')
	return queryString
}
