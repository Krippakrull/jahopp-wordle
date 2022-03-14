<script>
    import Letter from "./Letter.svelte";

    export let word;
    export let userGuesses;
    export let win;
</script>
<div class="jahopp-wordle-results">
<h1>{win ? 'Congratulations' : 'Ooops!'}</h1>
<h2>The correct word was:</h2>
{#each word.split('') as letter}
    <Letter letter={letter} result="correct"/>
    {/each}
{#if win}
<p>You took {userGuesses} attempt{userGuesses == 1 ? '':'s'}!</p>
    {/if}
</div>

<style>
    .jahopp-wordle-results {
        color: #ff3e00;
        font-size: 1em;
        font-weight: 100;

    }
</style>