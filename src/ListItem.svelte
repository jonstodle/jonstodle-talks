<script>
    import {slide} from 'svelte/transition'

    export let talk

    let isExpanded = false
</script>

<style>
    section {
        width: 1000px;
        max-width: 100%;
        background-color: #e6e6e6;
        padding: 0 1rem;
        margin: 0.5rem 0;
    }

    .header {
        display: flex;
        align-items: baseline;
        cursor: pointer;
        margin: 0 -1rem;
        padding: 1rem;
    }

    h2 {
        display: inline;
        margin: 0;
    }

    .date {
        margin-left: 1rem;
        flex: 1;
        color: #4d4d4d;
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
        border-radius: 1rem;
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

<section>
    <div class="header" on:click={() => isExpanded = !isExpanded}>
        <h2>{talk.title}</h2>
        <span class="date">{talk.date}</span>
        <span>{isExpanded ? '▲' : '▼'}</span>
    </div>
    {#if isExpanded}
    <div class="details" transition:slide>
        {#each talk.links as link}
        <a href={link.link}>{link.title}</a>
        {/each}
    </div>
    {/if}
</section>
