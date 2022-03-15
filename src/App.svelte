<script>
    import Board from "./components/Board.svelte";
    import Word from "./components/Word.svelte";
    import Letter from "./components/Letter.svelte";
    import {compareWords, getWord} from "./components/GetResults";
    import Results from "./components/Results.svelte";
    let guesses = 5;
    let letters = 5;

    const word = getWord();
    export let name;


    let words = [...Array(guesses)];
    words = words.map(word => word = [...Array(letters)].map(letter => letter = {letter:'', result:'undefined'}));


    let userGuesses = 0;
    let date;
    let finished;

    function guessWord() {

        let resultArray = compareWords(words[userGuesses].map(letter => letter.letter), word);

        words[userGuesses].forEach((result, index) => {
            result.result = resultArray[index].result;
        })
        words[userGuesses] = words[userGuesses];

        userGuesses++;

        if (resultArray.every(result => result.result === 'correct')) {
            finished = 'win';
        }



        if (userGuesses == guesses) {
            finished = 'loss';
        }
    }


</script>

<main>
    <h1>Jahopp...</h1>
    <p>...så fanns det en liten wordle-klon.</p>
    {#if !finished}
    <Board>
        {#each words as word, index}
            <Word>
                {#each word as letter}
                    <Letter on:done={guessWord} bind:letter={letter.letter} bind:result={letter.result}/>
                {/each}
            </Word>
        {/each}
    </Board>
        {:else}
        <Results win = {finished == 'win' ? true : false} word={word} userGuesses={userGuesses}/>
        {/if}
</main>

<style>
    main {
        background-color: #333333;
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
        width: auto;
        height: 100%;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

</style>