<script lang="ts">
	import { afterNavigate } from '$app/navigation'

	// Stores
	import useUIStore from '@stores/ui'

	// Icons
	import IconAlignRight from '~icons/line-md/align-right'
	import IconRemove from '~icons/line-md/remove'

	// Components
	import NavCTA from '@components/header/NavCTA.svelte'

	const { isDark } = useUIStore()

	$: menuOpen = false
	const menuClosedClasses = 'hidden sm:flex'
	const menuOpenClasses =
		'w-screen min-h-screen absolute left-0 top-0 flex-col justify-center items-center bg-white/95 dark:bg-cinder/95 z-10 p-10'

	afterNavigate(() => {
		menuOpen = false
	})

	const toggleMenu = () => {
		menuOpen = !menuOpen
	}
</script>

<div class="navigation-container flex items-center gap-5 sm:gap-8">
	<nav
		class="main-navigation flex gap-5 {menuOpen ? menuOpenClasses : menuClosedClasses}"
		aria-label="Main menu"
	>
		<button class={menuOpen ? 'block mb-3 hover:scale-110' : 'hidden'} on:click={toggleMenu}
			><IconRemove /></button
		>
		<a sveltekit:prefetch href="/" aria-label="Go to home">Home</a>
		<a sveltekit:prefetch href="/blog/" aria-label="Go to blog">About</a>

		<span class="mobile-menu-logo mx-2 inline-flex animate-pulse mt-10 sm:hidden">
			{#if $isDark}
				<img class="inline max-h-3" src="/logo-light.svg" alt="Mobile Menu Logo" />
			{:else}
				<img class="inline max-h-3" src="/logo-dark.svg" alt="Mobile Menu Logo" />
			{/if}
		</span>
	</nav>

	<button class="hamburger sm:hidden" on:click={toggleMenu} aria-label="Open mobile menu">
		<IconAlignRight />
	</button>

	<NavCTA />
</div>
