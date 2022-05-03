/**
 * Scope betyder omfang eller anvendelsesområder 
 * og bruges til at bestemme variablers tilgængelighed
 */

/**
 * Variabler/konstanter i et global scope er globale
 * Det betyder at de er tilgængelige i alle indlejrede 
 * scopes.
 */
const firstname = 'Jens';
let age = 25;

// Variabler/konstanter i et local scope
{
	// I dette scope har vi adgang til variabler og konstanter sat i global scope
	console.log(firstname)
	console.log(age)

	// Følgende variabel er kun tilgængelig i dette scope 
	// og efterfølgende indlejrede scopes
	let lastname = 'Jensen';

	{
		console.log(lastname); // Ok
	}
}

// Men variabler sat i et local scope er ikke 
// tilgængelige i et global scope
console.log(lastname);
