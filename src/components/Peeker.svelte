<script lang="ts">
	export let hasLink: boolean = false;
	export let items: string[] = [];
	export let linkLabel: string = "Visit";
</script>

<div class="peeker">
	{#each items as item}
		<span class="peeker_tool">
			{item}
		</span>
	{/each}
	{#if hasLink}
		<span class="peeker_linkback">{linkLabel}</span>
	{/if}
</div>

<style lang='scss'>
	.peeker {
		font-size: var(--ft-11);
		background: var(--dark);
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 6px 16px;
		color: var(--neutral);
		display: flex;
		align-items: center;
		transition: transform 0.3s, opacity 0.3s;
		&_linkback {
			margin-left: auto;
		}
		&_tool {
			& + &:before {
				content: "+";
			}
		}
	}
</style>
