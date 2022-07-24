import { Payload } from 'payload'
import { Collection } from '../../types'

export const toURL = (value: string) =>
	value
		.trim()
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase()

export const isURLTaken = async (payload: Payload, collection: Collection, value: string) => {
	const query = await payload.find({
		collection: collection,
		limit: 1,
		where: { url: { equals: value } }
	})

	return query.docs.length !== 0
}
