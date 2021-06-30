<section class="banner">
	<slot />
</section>

<style lang="scss">
	.banner {
		position: relative;
		& > h1 {
			margin-bottom: 0.5em;
			font-size: var(--ft-48);
		}
	}
</style>
