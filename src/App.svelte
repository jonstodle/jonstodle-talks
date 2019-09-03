<script>
    import ListItem from './ListItem.svelte'
    import talks from './talks.js'
</script>

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

<h1>Talks</h1>

<main>
    {#each talks as talk}
    <ListItem {talk}/>
    {/each}
</main>
