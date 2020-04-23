# JAVASCRIPT - FRI OPGAVE #2 - LOOP MASTER

I denne opgave skal du øve dig i at lave for() loops.

Ved hjælp af disse skal du forsøge at udskrive et mønster, som ligner de i opgaven foreskrevne mønstre.

NB! Opgaven bliver ret svær jo længere du kommer ned i mønstrene.
___
## EKSEMPEL: 

I følgende eksempel skal vi forsøge at ramme nedenstående mønster.

**Det ønskede resultat:**
```
*********
********
*******
******
*****
****
***
**
*
```

**Script:**

I nedenstående script er der anvendt en variabel til opbygning af det output vi vil have vist. Herefter er der lavet et for loop til de lodrette rækker og et for loop for hver af disse til de vandrette rækker.
```js
function make_pattern() {
   // Deklaration af variabel til output
  let output = '';

   // For loop til lodret række 
   for(let i = 1; i <= 9; i++) {

      // For loop til vandret række
      for(let j = 9; j >= i; j--) {

         // Tilføj * til output
         output += '* ';
   
      }

      // Tilføj ny række til output
      output += "\n";

   }

   // Udskriver resultat i browserens konsol
   console.log(output);
}
```
Det første for loop tæller op fra 1 til 9 og giver dermed 9 rækker som bliver angivet med en newline (linieskift). For hver række køres det andet for loop, som tæller ned fra 9 og så længe at tallet er større end eller lig med variablen i fra det første for loop. Det betyder at antallet af stjerne reduceres i det andet for loop i takt med at det første for loop definerer nye rækker og dermed skabes det ønskede mønster. 
___
## Opgave mønstre

Prøv dig nu frem med nedenstående mønstre. Du kan tage udgangspunkt i ovenstående eksempel og se om du kan ramme mønstrene. Husk at du også kan få brug for if/else i dine for loops. 

Du må selv vælge om du vil udskrive mønstret ved hjælp af console.log eller på et site.
___

### Mønster 1:
```
*********
*********
*********
*********
*********
*********
*********
*********
*********
```
___
### Mønster 2:
```
*********
********
*******
******
*****
****
***
**
*
```
___
### Mønster 3:
```
*
**
***
****
*****
******
*******
********
*********
```
___
### Mønster 4:
```
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
```
___
### Mønster 5:
```
*********
 ********
  *******
   ******
    *****
     ****
      ***
       **
        *
```
___
### Mønster 6:
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
___
### Mønster 7:
```
* * * * *
 * * * *
* * * * *
 * * * *
* * * * *
 * * * *
* * * * *
 * * * *
* * * * *
```
___
### Mønster 8:
```
*********
*       *
*********
*       *
*********
*       *
*********
*       *
*********
```
___
### Mønster 9:
```
*********
*********
**     **
**     **
**     **
**     **
**     **
*********
*********
```
___
### Mønster 10:
```
**     **
 **   **
  ** **
   ***
  ** **
 **   **
**     **
```
___

### En lille ekstra opgave til de flittige...

Kan du skrive dit navn?
___