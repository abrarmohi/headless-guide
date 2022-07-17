<script lang="ts">
	import { fade } from 'svelte/transition'

	// Stores
	import useUIStore from '@stores/ui'

	const { isDark } = useUIStore()
</script>

<div class="logo-container min-h-[36px]">
	{#if $isDark}
		<a
			transition:fade
			class="site-logo absolute no-hover-effect"
			href="/"
			title="Headless Guide"
			aria-label="Go to home"
		>
			<img src="/logo-light.svg" alt="Headless Guide" />
		</a>
	{:else}
		<a
			transition:fade
			class="site-logo absolute no-hover-effect"
			href="/"
			title="Headless Guide"
			aria-label="Go to home"
		>
			<img src="/logo-dark.svg" alt="Headless Guide" />
		</a>
	{/if}
</div>
