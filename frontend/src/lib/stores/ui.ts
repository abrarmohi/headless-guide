import { onMount } from 'svelte'
import { writable, get } from 'svelte/store'

const isDark = writable<boolean>(true)

export default () => {
	onMount(() => {
		isDark.set(
			localStorage.theme === 'dark' ||
				document.documentElement.classList.contains('dark') ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		)
	})

	const toggleTheme = () => {
		if (get(isDark)) {
			isDark.set(false)
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else {
			isDark.set(true)
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
	}

	return {
		isDark,
		toggleTheme
	}
}
