<script lang="ts">
	import type { PageData } from './$types';
	import ListItem from './ListItem.svelte';

	export let data: PageData;
</script>

<header class="w-full pb-4 pt-5 bg-stone-700 border-b-2 border-stone-800 mb-4">
	<h1 class="text-center text-4xl font-bold text-white tracking-wider">TALKS</h1>
</header>

<main class="flex flex-col items-center w-full gap-4">
	{#each data.talks as talk}
		<ListItem {talk} />
	{/each}
</main>
