# Var, let & const

Variabler kan defineres på tre forskellige måder i javascript. Før ES6 brugte den gamle `var` metode og med ES6 blev metoderne `let` og `const` tilføjet. 

Der er selvfølgelig forskelle på dem og dem vil vi kigge på herunder.

## Var

Førhen brugte man keywordet `var` til at deklarere variabler. Da havde Javascript to typer af anvendelsesområder for variabler: *Global Scope* og *Function Scope*.

### Global scope

En variabel i et global scope er, når variablen erklæres uden for en funktion.

### Local scope

En variabel i et local scope er, når variablen erklæres inde i en funktion og dermed kun kan tilgås indenfor funktionen lokale scope.

**Eksempel:**

```javascript
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

```javascript
if(true) {
    //Block Scope
    let test = "Hej verden";
    console.log(test); //Vil udskrive 'test'
}
console.log(test); //Vil udskrive undefined

```
Og en let variabel kan opdateres men ikke omdeklareres.

**Eksempel:**

```javascript
let text = "Testing...";

if(text) {
    text = "Still testing..."; //Ok

    let text = "More testing..."; //Vil give fejl
}

```

Men hvis den samme variabel er defineret i forskellige scopes, vil der ikke være nogen fejl.

**Eksempel:**

```javascript
let greeting = "Hej verden";

if(true) {
    let greeting = "Hej Vejgård";
    console.log(greeting); // "Hej Vejgård"
}
console.log(greeting); //"Hej Verden"
```

Dette skyldes, at begge tilfælde behandles som forskellige variabler, da de har forskellige scopes.

## Const 

Man bruger keywordet `const` til at erklære variabler med konstante værdier og disse deler nogle ligheder med let erklæringer.

**Variabler erklæret med `const` er block scoped**

Ligesom variabler erklæret med `let`, kan `const` erklæringer kun tilgås i det scope, hvor de er blevet erklæret.

**Variabler erklæret med `const` kan ikke opdateres eller omdeklareres**

Dette betyder, at værdien af en variabel erklæret med `const` forbliver den samme inden for sit anvendelsesområde. Den kan ikke opdateres eller omdeklareres. Derfor vil nedenstående give en fejl:

**Eksempel:**
```javascript
const greeting = "Hej verden";
greeting = "Hej Vejgård";
```
Eller dette:
```javascript
const greeting = "Hej verden";
const greeting = "Hej Vejgård";
```

Hver variabel erklæret med `const` skal derfor initialiseres på samme tidspunkt som den bliver erklæret.

Denne adfærd er anderledes, når det kommer til objekter, der er erklæret med const. Mens en const-objekt ikke kan opdateres, kan egenskaberne for disse objekter opdateres. Derfor, hvis vi erklærer en `const` objekt som dette:

```javascript
const greeting = {
    message: "Hej verden",
    color: "blue"
};
```
kan vi ikke gøre sådan her:
```javascript
greeting = {
    words: "Hej verden",
    nuance: "blue"
}; //error :  Assignment to constant variable.
```
men vi kan gøre sådan her:
```javascript
greeting.message: "Hej alle mennesker i verden"
```
## Forskelle i en nøddeskal
- `var` erklæringer er global scoped eller function scoped mens `let` og `const` er blok scoped.

- `var` variabler kan opdateres og omdeklareres inden for dens anvendelsesområde; `let` variabler kan opdateres, men ikke omdeklareres; `const` variabler kan hverken opdateres eller omdeklareres.

- Mens `var` og `let` kan deklareres uden at blive initialiseret, skal `const` initialiseres under erklæringen.