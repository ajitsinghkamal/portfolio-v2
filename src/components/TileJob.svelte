<script lang="ts">
	export let link: string;
	export let tech: string[];
	export let duration: {
		from: string;
		to?: string;
	};
	export let title: string;

	let titleSize: string = "2rem";

	import Tile from "./Tile.svelte";
</script>

<Tile {link} items={tech}>
	<div class="job">
		<small class="job_yr">{duration.from}</small>
		<small class="job_yr">{duration.to || "Current"}</small>
	</div>
	<p class="title" style="--title-size: {titleSize}">
		{title}
	</p>
</Tile>

<style lang="scss">
	.title {
		font-size: var(--title-size);
	}
	.job {
		margin: 0;
		font-size: var(--ft-16);
		font-variant: tabular-nums;
		&_yr {
			&:first-of-type:after {
				content: "-";
				margin: 0 5px;
			}
		}
	}
</style>
