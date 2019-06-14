# Var, let & const

Variabler kan defineres på tre forskellige måder i javascript. Før ES6 brugte den gamle *var* metode og med ES6 blev metoderne *let* og *const* tilføjet. 

Der er selvfølgelig forskelle på dem og dem vil vi kigge på herunder.

## Var

Førhen brugte man keywordet *var* til at deklarere variabler. Da havde Javascript to typer af anvendelsesområder for variabler: *Global Scope* og *Function Scope*.

### Global scope

En variabel i et global scope er, når variablen erklæres uden for en funktion.

### Local scope

En variabel i et local scope er, når variablen erklæres inde i en funktion og dermed kun kan tilgås indenfor funktionen lokale scope.

**Eksempel:**

```
var global = "Hej verden";

function myFunction() {
    var local = "Hej Vejgård";
}
```
Der var problemer med keywordet *var* i forhold til de globale og lokale scopes, og med lanceringen af ES6 blev *let* og *const* introduceret.

## Let 

En let variabel er begrænset til det block scope den oprettes i. 

Et block scope består af et stykke kode omgivet af krøllede paranteser {}:

**Eksempel:**

```
if(true) {
    //Block Scope
    let test = "Hej verden";
    console.log(test); //Vil udskrive 'test'
}
console.log(test); //Vil udskrive undefined

```
Og en let variabel kan opdateres men ikke omdeklareres.

**Eksempel:**

```
let text = "Testing...";

if(text) {
    text = "Still testing..."; //Ok

    let text = "More testing..."; //Vil give fejl
}

```



