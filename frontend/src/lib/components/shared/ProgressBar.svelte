<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		window.addEventListener('scroll', scrollProgressBar)
	})

	const scrollProgressBar = () => {
		const progressBarEl: HTMLDivElement | null = document.querySelector('.progress-bar')
		const bodyEl: HTMLBodyElement | null = document.querySelector('body')

		if (!bodyEl || !progressBarEl) return

		let scrollDistance = -bodyEl.getBoundingClientRect().top
		let progressPercentage =
			(scrollDistance /
				(bodyEl.getBoundingClientRect().height - document.documentElement.clientHeight)) *
			100

		let val = Math.floor(progressPercentage)
		progressBarEl.style.width = val + '%'

		if (val < 0) {
			progressBarEl.style.width = '0%'
		}
	}
</script>

<div class="progress-bar" />

<style lang="scss">
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 8px;
		background: linear-gradient(to right, #4434e0, #5110ae);
		width: 0%;
		z-index: 100;
		transition: width 0.2s ease-out;
	}
</style>
