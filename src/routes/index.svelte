<script lang="ts" context="module">
  import { apiKey, apiUrl } from '$lib/supabase';

  export async function load({fetch}) {
    let talks = [];

    try {
      talks = await fetch(`${apiUrl}/rest/v1/talks?select=*&order=date.desc.nullslast`, {
        headers: {
          apiKey: apiKey,
          authorization: `Bearer ${apiKey}`
        }
      })
        .then(r => r.json());
    } catch (e) {
      console.error(e);
    }

    return {
      props: {
        talks
      }
    };
  }
</script>

<script lang="ts">
  import ListItem from '$lib/components/ListItem.svelte';
  import type { Talk } from '$lib/types';

  export let talks: Talk[];
</script>

<svelte:head>
  <title>Jon G Stødle's talks</title>
</svelte:head>

<h1>Talks</h1>

<main>
  {#each talks as talk}
    <ListItem {talk}/>
  {/each}
</main>

<style>
  h1 {
    text-align: center;
    background-color: #4d4d4d;
    color: #e6e6e6;
    padding: 1.25rem 1rem 1rem;
    text-transform: uppercase;
    margin: 0;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
</style>
