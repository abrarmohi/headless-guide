<script>
	import '../app.css'
</script>

<div class="container p-3 flex flex-col gap-3">
	<header class="header flex flex-col gap-3">
		<div class="text-3xl">SSS</div>
		<nav class="navigation">
			<a href="/">Home</a>
			<a href="/blog">About</a>
		</nav>
	</header>

	<main class="main">
		<slot />
	</main>

	<footer class="footer">
		<p class="copyright">&copy; 2019</p>
	</footer>
</div>
