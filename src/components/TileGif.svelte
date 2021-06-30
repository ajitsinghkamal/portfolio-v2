<script lang="ts">
	export let link: string;
	export let tech: string[];
	export let description: string;
	export let src: string;

	import Tile from "./Tile.svelte";

	let isLoaded: boolean = false;

	function toggleGifLoading() {
		isLoaded = true;
	}
</script>

<Tile {link} items={tech}>
	<img
		{src}
		alt={description}
		onLoad={toggleGifLoading}
		style="opacity: {isLoaded ? '1' : '0'}"
		class="gif"
	/>
</Tile>

<style lang="scss">
	.gif {
		transition: opacity 0.6s;
	}
</style>
