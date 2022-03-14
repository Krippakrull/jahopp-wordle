const words = ['satan', 'humle', 'hicka', 'hoppa', 'passa', 'nicka', 'stork', 'kanon', 'palla', 'rosta', 'kudde']

export function compareWords(guessInput, answerInput) {



    const results = [...Array(5)]

    const guess = guessInput;
    const answer = answerInput.toLowerCase().split('')

    guess.forEach((letter, index) => {
        if (letter == answer[index]) {
            results[index] = {letter: letter, result: 'correct'};
        } else if (answer.includes(letter) && count(answer, letter) - count(results, letter, 'letter') > 0 && count(answer, letter) >= count(guess, letter)) {
            results[index] = {letter: letter, result: 'misplaced'};
        } else {
            results[index] = {letter: letter, result: 'incorrect'};
        }
    })

    /**
     *
     * @param array Array for counting
     * @param search Term to count
     * @param property Optional - If array is of object, specifies the object property key
     * @returns The number of occurences of search term in array
     */


    return results;
}
/**
 *
 * @param array Array for counting
 * @param search Term to count
 * @param property Optional - If array is of object, specifies the object property key
 * @returns The number of occurences of search term in array
 */
function count(array, search, property = null) {
    let count = array.reduce(function (n, val) {
        if (property) {
            return val !== undefined ? n + (val[property] === search) : n;
        } else {
            return n + (val === search)
        }
    }, 0);
    return count;
}

export async function fetchTime() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const result = await fetch("https://worldtimeapi.org/api/timezone/Europe/Stockholm");
    console.log(await result);
}

export function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}