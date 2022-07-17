<script lang="ts">
	// Components
	import ThemeSwitcher from './ThemeSwitcher.svelte'

	// Icons
	import IconGithubLoop from '~icons/line-md/github-loop'
</script>

<div class="nav-cta flex gap-3">
	<ThemeSwitcher />
	<a
		class="github no-hover-effect"
		title="Github"
		aria-label="Go to Github"
		href="https://github.com/abrarmohi/headless-guide"
		target="_blank"
	>
		<IconGithubLoop />
	</a>
</div>
