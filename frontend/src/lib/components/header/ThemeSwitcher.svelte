<script lang="ts">
	import { onMount } from 'svelte'

	// Stores
	import { isDark } from '@stores/ui'

	// Icons
	import IconSunnyFilled from '~icons/line-md/sunny-filled'
	import IconMoonFilled from '~icons/line-md/moon-filled'

	onMount(() => {
		$isDark = document.documentElement.classList.contains('dark')
	})

	const changeTheme = () => {
		if ($isDark) {
			$isDark = false
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else {
			$isDark = true
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
	}
</script>

<button
	class="theme-switcher"
	on:click={changeTheme}
	title="Switch Theme"
	aria-label="Switch theme"
>
	{#if $isDark}
		<IconMoonFilled />
	{:else}
		<IconSunnyFilled />
	{/if}
</button>
