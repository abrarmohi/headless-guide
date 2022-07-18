<script lang="ts">
	// Icons
	import IconChevronSmallUp from '~icons/line-md/chevron-small-double-up'

	const scrollToTop = () => {
		const bodyEl = document.querySelector('body')
		if (!bodyEl) return
		bodyEl.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<button
	class="back-to-top font-bold py-2 px-4 rounded bg-gradient-to-r from-royal-blue to-blue-gem text-white hover:to-royal-blue fixed right-5 bottom-9 z-100"
	on:click={scrollToTop}
>
	<IconChevronSmallUp />
</button>
