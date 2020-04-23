/**
 *  Kalder funktion med alle funktioner :)
 */
call_loops();

/**
 * Funktion til funktions kald :)
 * Når du har skrevet din funktion kan du smide kaldet ind i denne.
 */
function call_loops() {
    loop_example();
}

/**
 * Pattern Example
 */
function loop_example() {
    // Deklaration af variabel til output
    let pattern = '';
    // For loop til lodret række 
    for (let i = 1; i <= 9; i++) {
        // For loop til vandret række
        for (let j = 9; j >= i; j--) {
            // Tilføj * til output
            pattern += '* ';
        }
        // Tilføj ny række til output
        pattern += "\n";
    }
    // Udskriver var pattern i DOM element med id = patterns
    document.getElementById('patterns').innerHTML += pattern + "<hr>";
}
