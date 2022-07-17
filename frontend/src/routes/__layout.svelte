<script lang="ts">
	// Main CSS
	import '../app.css'

	// Components
	import ProgressBar from '@/lib/components/shared/ProgressBar.svelte'
	import SiteLogo from '@components/header/SiteLogo.svelte'
	import NavBar from '@components/header/NavBar.svelte'
	import CopyrightText from '@components/footer/CopyrightText.svelte'
	import FooterNav from '@components/footer/FooterNav.svelte'
</script>

<header class="header flex gap-8 justify-between py-5 border-b dark:border-0">
	<ProgressBar />

	<SiteLogo />

	<NavBar />
</header>

<main class="main">
	<slot />
</main>

<footer
	class="footer mt-auto text-sm flex flex-col gap-3 items-center justify-between py-5 border-t dark:border-0 sm:flex-row"
>
	<CopyrightText />

	<FooterNav />
</footer>
