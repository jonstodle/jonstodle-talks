<script>
  import {slide} from 'svelte/transition'

  export let talk

  let isExpanded = false
</script>

<section>
  <div class="header" on:click={() => isExpanded = !isExpanded}>
    <h2>{talk.title}</h2>
    <span class="date">{talk.date}</span>
    <span class="chevron" class:expanded={isExpanded}>▼</span>
  </div>
  {#if isExpanded}
    <div class="details" transition:slide>
      {#if talk.slides}
        <a href={talk.slides}>Slides</a>
      {/if}

      {#if talk.video}
        <a href={talk.video}>Video</a>
      {/if}

      {#if talk.code}
        <a href={talk.code}>Code</a>
      {/if}
    </div>
  {/if}
</section>

<style>
  section {
    width: 1000px;
    max-width: 100%;
    color: rgb(50, 50, 50);
    background-color: #e6e6e6;
    padding: 0 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    margin: 0 -1rem;
    padding: 1rem;
    transition: background-color 200ms;
    border-radius: 5px;
  }

  .header:hover {
    background-color: #cccccc;
  }

  h2 {
    display: inline;
    margin: 0;
  }

  .date {
    color: #4d4d4d;
  }

  .chevron {
    transition: 250ms ease-in-out;
  }

  .expanded {
    rotate: 180deg;
  }

  .details {
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 0 -1rem;
    border-top: 1px solid #4d4d4d;
  }

  .details > * {
    margin: 0.5rem;
  }

  a {
    padding: 1.25rem 1rem 1rem;
    border: 1px solid #4d4d4d;
    border-radius: 5px;
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: black;
    transition: background-color 200ms;
  }

  a:active, a:hover, a:visited {
    text-decoration: none;
    color: black;
  }

  a:hover {
    background-color: #cccccc;
  }
</style>
