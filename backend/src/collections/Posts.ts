// Types
import { CollectionConfig } from 'payload/types'
import { Collection } from '../types'

// Hooks
import { validateURL } from '../hooks/posts'

const Posts: CollectionConfig = {
	slug: 'posts',
	admin: {
		defaultColumns: ['title', 'category', 'status'],
		useAsTitle: 'title'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true
		},
		{
			name: 'url',
			type: 'text',
			required: true,
			unique: true,
			hooks: {
				beforeValidate: [validateURL]
			}
		},
		{
			name: 'author',
			type: 'relationship',
			relationTo: Collection.USERS
		},
		{
			name: 'publishedDate',
			type: 'date'
		},
		{
			name: 'category',
			type: 'relationship',
			relationTo: Collection.CATEGORIES
		},
		{
			name: 'content',
			type: 'richText'
		},
		{
			name: 'status',
			type: 'select',
			options: [
				{
					value: 'draft',
					label: 'Draft'
				},
				{
					value: 'published',
					label: 'Published'
				}
			],
			defaultValue: 'draft',
			admin: {
				position: 'sidebar'
			}
		}
	]
}

export default Posts
