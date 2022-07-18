<script lang="ts">
	export let link: string
	export let newTab: boolean = false
</script>

<a href={link} target={newTab ? '_blank' : '_self'} class="no-hover-effect">
	<button
		class="custom-button font-bold py-2 px-4 rounded bg-gradient-to-r  from-royal-blue to-blue-gem text-white hover:to-royal-blue"
	>
		<slot />
	</button>
</a>
