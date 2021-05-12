/**
 *  Kalder funktion med alle funktioner :)
 */
call_loops();

/**
 * Funktion til funktions kald :)
 * Når du har skrevet din funktion kan du smide kaldet ind i denne.
 */
function call_loops() {
    pattern_1();
    pattern_2();
    pattern_3();
    pattern_4();
}


/**
 * Pattern #1
 */
function pattern_1() {
    let pattern = '';

    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            pattern += '* ';
        }
        pattern += "\n";
    }
    document.getElementById('patterns').innerHTML += pattern + "<hr>";
}

/**
 * Pattern #2
 */
 function pattern_2() {
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

/**
 * Pattern #3
 */
 function pattern_3() {
    // Deklaration af variabel til output
    let pattern = '';
    // For loop til lodret række 
    for (let i = 1; i <= 9; i++) {
        // For loop til vandret række
        for (let j = 1; j <= i; j++) {
            // Tilføj * til output
            pattern += '* ';
        }
        pattern += "\n";
        // Tilføj ny række til output
    }
    // Udskriver var pattern i DOM element med id = patterns
    document.getElementById('patterns').innerHTML += pattern + "<hr>";
}

/**
 * Pattern #4
 */
 function pattern_4() {
    // Deklaration af variabel til output
    let pattern = '';
    // For loop til lodret række 
    for (let i = 1; i <= 9; i++) {
        // For loop til vandret række
        for (let j = 1; j <= 9; j++) {
            // Tilføj * til output
            if(i + j >= 10) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += "\n";
        // Tilføj ny række til output
    }
    // Udskriver var pattern i DOM element med id = patterns
    document.getElementById('patterns').innerHTML += pattern + "<hr>";
}