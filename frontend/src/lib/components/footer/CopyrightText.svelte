<script lang="ts">
	// Stores
	import useUIStore from '@stores/ui'

	const { isDark } = useUIStore()
	const year = new Date().getFullYear()
</script>

<p class="copyright text-sm flex flex-col gap-3 justify-center items-center sm:flex-row">
	<span class="footer-logo animate-pulse">
		{#if $isDark}
			<img class="inline max-h-3" src="/logo-light.svg" alt="Footer Logo" />
		{:else}
			<img class="inline max-h-3" src="/logo-dark.svg" alt="Footer Logo" />
		{/if}
	</span>
	<span class="text">Copyright &copy; {year}. All rights reserved.</span>
</p>
