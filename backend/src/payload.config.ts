import { buildConfig } from 'payload/config'
import path from 'path'
import Posts from './collections/Posts'
import Categories from './collections/Categories'
import Users from './collections/Users'

export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:4000',
	admin: {
		user: Users.slug
	},
	collections: [Posts, Categories, Users],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts')
	}
})
