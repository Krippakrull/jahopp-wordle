<script>
    import Letter from "./Letter.svelte";
    import {createEventDispatcher} from "svelte";
    import {compareWords} from "./GetResults";
    let result = createEventDispatcher();

</script>

<div class="jahopp-wordle-word">
    <slot/>
</div>

<style>
    .jahopp-wordle-word {
        display: flex;
        flex-direction: row;
    }
</style>