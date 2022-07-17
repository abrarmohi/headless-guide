<script lang="ts">
	export let link: string
	export let newTab: boolean = false
</script>

<a href={link} target={newTab ? '_blank' : '_self'} class="no-hover-effect">
	<button
		class="custom-button font-bold py-2 px-4 rounded bg-royal-blue text-white hover:bg-blue-gem"
	>
		<slot />
	</button>
</a>
