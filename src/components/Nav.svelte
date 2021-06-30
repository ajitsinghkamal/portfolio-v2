<script lang="ts">
	type Link = {
		url: string;
		label: string;
	};
	export let links: Link[];
	import Button from "./Button.svelte";
</script>

<nav class="nav">
	{#each links as link}
		<Button link={link.url} css="nav_item">
			{link.label}
		</Button>
	{/each}
</nav>

<style lang="scss">
	.nav {
		margin-left: -0.3em;
		margin-top: 0.5em;
		&_item {
			font-size: var(--ft-14);
			color: #f1f1f1;
			margin-right: 1em;
			opacity: 0.8;
			display: inline-block;
			transition: background 0.3s, color 0.3s, opacity 0.3s;
			&:active {
				background: #f1f1f1;
				color: #000;
				opacity: 1;
			}
			@media (hover: hover) {
				&:hover {
					background: #f1f1f1;
					color: #000;
					opacity: 1;
				}
			}
		}
	}
</style>
