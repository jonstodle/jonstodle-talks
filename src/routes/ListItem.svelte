<script>
	import { slide } from 'svelte/transition';
	import PresentationIcon from './PresentationIcon.svelte';
	import VideoCameraIcon from './VideoCameraIcon.svelte';
	import CodeIcon from './CodeIcon.svelte';

	export let talk;

	let isExpanded = false;
</script>

<article class="bg-stone-100 w-[800px] max-w-[90%] rounded">
	<div
		class="flex justify-between items-baseline py-4 px-2 cursor-pointer"
		on:click={() => (isExpanded = !isExpanded)}
	>
		<h2 class="flex-grow text-xl">{talk.title}</h2>
		<span class="font-['JetBrains_Mono']">{Intl.DateTimeFormat().format(talk.date)}</span>
		<span class="transition" class:rotate-180={isExpanded}>▼</span>
	</div>
	{#if isExpanded}
		<div
			class="border-t-2 border-stone-500 bg-stone-300 flex justify-evenly gap-2 p-2 rounded"
			transition:slide
		>
			{#if talk.slides}
				<a href={talk.slides}>
					<PresentationIcon />
					<span>Slides</span>
				</a>
			{/if}

			{#if talk.video}
				<a href={talk.video}>
					<VideoCameraIcon />
					<span>Video</span>
				</a>
			{/if}

			{#if talk.code}
				<a href={talk.code}>
					<CodeIcon />
					<span>Code</span>
				</a>
			{/if}
		</div>
	{/if}
</article>

<style>
	a {
		@apply rounded-lg border-2 border-transparent hover:border-stone-500 w-full p-2 text-center bg-stone-100 hover:bg-stone-200 flex justify-center items-center gap-1 transition;
	}

	a > span {
		@apply pt-0.5;
	}
</style>
