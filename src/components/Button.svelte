<script lang="ts">
	export let type: "button" | "submit" | "reset" = "button";
	export let link: string = '';
	export let onClick: () => void = undefined;
	export let css: string = "";
</script>

{#if link}
	<a
		class={`btn ${css}`}
		href={link}
		rel="noreferrer noopener"
		target="_blank"
	>
		<slot />
	</a>
{:else}
	<button {onClick} {type} class={`btn ${css}`}>
		<slot />
	</button>
{/if}

<style lang="scss">
	.btn {
		font-size: var(--ft-18);
		padding: 0.5em;
		cursor: pointer;
		text-decoration: none;
		background: none;
		transition: background 0.3s, color 0.3s, opacity 0.3s;
		&:hover {
			color: var(--primary);
			opacity: 1;
		}
	}
</style>
