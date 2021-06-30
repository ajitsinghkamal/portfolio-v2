<script lang="ts">
	import Header from "../components/DefaultHeader.svelte";
</script>

<div>
	<div class="page">
		<Header greeting="hello world" />
		<main class="page_content">
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	:global {
		@import "../styles/main";
	}
	.page {
		position: relative;
		height: 100vh;
		transition: color 0.3s, background 0.3s;
		display: flex;
		flex-direction: column;
		&_content {
			width: var(--container);
			margin: 0 auto;
			max-width: 90%;
			padding: 0em 0 1em;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
