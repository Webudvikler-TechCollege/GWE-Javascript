# Forskelle på var, let & const

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
var global_greeting = "Hej verden";

function myFunction() {
    var local_greeting = "Hej Tech College";
}
```
Der var problemer med keywordet *var* i forhold til de globale og lokale scopes, og med lanceringen af ES6 blev *let* og *const* introduceret.

### Vægtning

Vægtning i javascript er en mekanisme, som gør at variabler og funktioner flyttes til toppen af deres rækkevidde og inden afvikling af kode. Det betyder at vi f.eks. kan kalde en funktion i en script fil selvom at funktionen først bliver defineret længere nede i filen.

**Vægtning af `var`**

Variabler deineret med var er vægtet til toppen af deres scope, hvilket betyder at de automatisk bliver erklæret med en *undefined* værdi.

**Eksempel:**

```javascript
var greeting;
console.log(greeting); //Undefined
greeting = "Hej verden";
```

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
let greeting = "Hej Verden";

if(greeting) {
    greeting = "Hej Tech College"; //Ok

    let greeting = "Hej Tech College"; //Vil give fejl
}

```

Men hvis den samme variabel er defineret i forskellige scopes, vil der ikke være nogen fejl.

**Eksempel:**

```javascript
let greeting = "Hej verden";

if(true) {
    let greeting = "Hej Tech College";
    console.log(greeting); // "Hej Tech College"
}
console.log(greeting); //"Hej Verden"
```

Dette skyldes, at begge tilfælde behandles som forskellige variabler, da de har forskellige scopes.

### Vægtning af `let`

Ligesom `var`, vægtes `let` erklæringer til toppen. I modsætning til `var`, der initialiseres som udefineret, bliver `let` variabler ikke automatisk initialiseret. Så hvis du forsøger at bruge en `let` variabel før deklarationen, får du en *Reference Error*.

## Const 

Man bruger keywordet `const` til at erklære variabler med konstante værdier og disse deler nogle ligheder med let erklæringer.

Variabler erklæret med `const` er block scoped.

Ligesom variabler erklæret med `let`, kan `const` erklæringer kun tilgås i det scope, hvor de er blevet erklæret.

Variabler erklæret med `const` kan ikke opdateres eller omdeklareres.

Dette betyder, at værdien af en variabel erklæret med `const` forbliver den samme inden for sit anvendelsesområde. Den kan ikke opdateres eller omdeklareres. Derfor vil nedenstående give en fejl:

**Eksempel:**
```javascript
const greeting = "Hej verden";
greeting = "Hej Tech College"; //Vil give fejl!
```
Eller dette:
```javascript
const greeting = "Hej verden";
const greeting = "Hej Vejgård"; //Vil give fejl!
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
greeting.message: "Hej Tech College"
```
### Vægtning af `const`
Ligesom `let` variabler bliver `const` variabler vægtet til toppen, men ikke automatisk initialiseret.

## Forskelle i en nøddeskal
- `var` erklæringer er global scoped eller function scoped mens `let` og `const` er blok scoped.

- `var` variabler kan opdateres og omdeklareres inden for dens anvendelsesområde; `let` variabler kan opdateres, men ikke omdeklareres; `const` variabler kan hverken opdateres eller omdeklareres.

- De er alle hævet til toppen af deres rækkevidde, men mens `var` variablerne initialiseres med undefined, initialiseres `let` og `const` variabler ikke.

- Mens `var` og `let` kan deklareres uden at blive initialiseret, skal `const` initialiseres under erklæringen.