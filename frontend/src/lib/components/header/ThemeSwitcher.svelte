<script lang="ts">
	// Stores
	import useUIStore from '@stores/ui'

	// Icons
	import IconSunnyFilled from '~icons/line-md/sunny-filled'
	import IconMoonFilled from '~icons/line-md/moon-filled'

	const { isDark, toggleTheme } = useUIStore()
</script>

<button
	class="theme-switcher"
	on:click={toggleTheme}
	title="Switch Theme"
	aria-label="Switch theme"
>
	{#if $isDark}
		<IconMoonFilled />
	{:else}
		<IconSunnyFilled />
	{/if}
</button>
