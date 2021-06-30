<script lang="ts">
	export let greeting: string;
</script>

<header class="header">
	<div class="header_content">
		<!-- <IconWave /> -->
		<span class="header_greet">
			{greeting}
		</span>
	</div>
</header>

<style lang="scss">
	.header {
		width: 100%;
		&_content {
			margin: 0 auto;
			width: var(--container);
			display: flex;
			max-width: 90%;
			justify-content: space-between;
			height: 80px;
			align-items: center;
		}
		&_greet {
			margin-left: 1em;
			font-size: var(--ft-14);
		}
	}
</style>
