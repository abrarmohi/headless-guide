import { FieldHook } from 'payload/types'
import { isURLTaken, toURL } from '../../util'
import { Collection } from '../../types'

export const validateURL: FieldHook = async ({ value, req: { payload } }) => {
	const url = toURL(value)
	const urlTaken = await isURLTaken(payload, Collection.POSTS, url)

	if (urlTaken) {
		throw new Error('URL is taken. Use a different one.')
	}

	return url
}
