<script lang="ts">
	export let link: string;
	export let tech: string[];
	import Tile from "./Tile.svelte";
	import Pen from "./Pen.svelte";
</script>

<Tile {link} items={tech}>
	<Pen />
</Tile>
