<script lang="ts">
	import TileJob from "./TileJob.svelte";
	import TileGif from "./TileGif.svelte";
	import TilePen from "./TilePen.svelte";

	import { summaryStore as portfolio } from "../state/summary";

</script>

<div class="portfolio">
	{#each $portfolio.works as item}
		{#if item.type === "fullTime"}
			<TileJob
				tech={item.tech}
				link={item.link}
				duration={item.duration}
				title={item.name}
			/>
		{/if}
		{#if item.type === "gif"}
			<TileGif
				tech={item.tech}
				link={item.link}
				src={item.imageUrl}
				description={item.description}
			/>
		{/if}
		{#if item.type === "pen"}
			<TilePen tech={item.tech} link={item.link} />
		{/if}
	{/each}
</div>

<style lang="scss">
	.portfolio {
		display: flex;
		flex-flow: row wrap;
		margin: 3em -0.5em 1em;
	}
</style>
