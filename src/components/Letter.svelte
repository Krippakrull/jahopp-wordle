<script>
    import {createEventDispatcher} from "svelte";

    export let letter = '';
    export let result = '';
    const guess = createEventDispatcher();

    function next(ev) {

        const input = ev.keyCode;
        const char = String.fromCharCode(input)


        if(char.toUpperCase() != char.toLowerCase()) {
            ev.target.disabled = true;
            letter = char;
            if (!ev.target.nextElementSibling) {
                guess('done', true)
                ev.target.parentElement.nextElementSibling.firstChild.focus();
            } else {
                ev.target.nextElementSibling.focus();
            }
        }


    }

</script>



    <input class="jahopp-wordle-letter {result}" maxlength="1" bind:value={letter} on:keypress={next}>

<style>
    .jahopp-wordle-letter {
        padding: 5px;
        font-size: xx-large;
        width: 2.5rem;
        height: 2.5rem;
        margin: 0;
        border-color: black;
        text-transform: uppercase;
    }
    .undefined {
        background-color: white;
    }
    .correct {
        background-color: green;
    }
    .incorrect {
        background-color: red;
    }
    .misplaced {
        background-color: yellow;
        color: blue;
    }
</style>
