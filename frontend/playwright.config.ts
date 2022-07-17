import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn build && npm run preview -- --port 3000',
		port: 3000,
		reuseExistingServer: true
	}
}

export default config
