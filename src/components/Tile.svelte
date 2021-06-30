<script lang="ts">
	export let link: string;
	export let items: string[];
	export let linkLabel: string = "";

	import Peeker from "./Peeker.svelte";
</script>

<a class="tile" href={link} target="_blank" referrer-policy="no-referrer">
	<slot />
	<Peeker {items} {linkLabel} hasLink={!!link} />
</a>

<style lang="scss">
	.tile {
		position: relative;
		padding: 1em;
		background: rgba(0, 0, 0, 0.4);
		overflow: hidden;
		height: 150px;
		flex: 1 0 calc(33% - 2em);
		margin: 0.5em;
		min-width: 240px;
		max-width: 300px;
		color: inherit;
		text-decoration: none;
		@media (hover: hover) {
			& > div:last-child {
				transform: translateY(100%);
				opacity: 0;
			}
			&:hover {
				> div:last-child {
					transform: translateY(0);
					opacity: 1;
				}
			}
		}
	}
</style>
