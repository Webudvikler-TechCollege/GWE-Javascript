# Javascript: Syntaks, Scopes & Kommentarer

Sætninger i javascript - og andre programmeringssprog - kaldes *statements*.

Principperne i, hvordan disse sætninger - eller statements - er bygget op, kaldes *syntaks*.

Et statement kan se således ud:

```js
let firstname = 'Vilmar'; // Statement #1

let lastname = 'Jensen'; // Statement #2
```
Statements afsluttes altid med et semikolon.
___
## Scopes
Scopes kan oversættes til *anvendelsesområder* og kan bruges til at lave afgrænsninger i din kode. 

De anvendes typisk i forbindelse med funktioner eller betingelser. Eksemplerne i dette afsnit er forenklede for at præcisere hvad begrebet scope dækker over.

Man bruger *curly brackets* - også kaldet tuborgklammer - til at definere sine scopes med:

```js
{ }
```

Man kan også se på scopes som indenterede niveauer i sin kode. Hvis man er i niveau 0 kalder man det *global scope*.

Eksempel:
```js
// Her er du i det der kaldes global scope. 

{
    // Her befinder man sig i et lokalt scope
}

{
    // Her befinder man sig i et lokalt scope #1
    {
        // Her befinder man sig i et lokalt scope #2
    }
}
```

Scopes har stor betydning for dine variablers synlighed. Hvis du deklarere en variabel i et scope vil du kun kunne tilgå den indenfor det samme scope.
___
## Kommentarer
Javascript programmering kan ofte blive komplekst og indeholde meget kode. Derfor er det en rigtig god ide at kommentere din kode. 

Kommentarer kan hjælpe både dig og andre med at finde rundt i koden. 

Der er to måder at lave kommentarer på i javascript.

```js
// Denne metode er god til kommentarer på en enkelt linie 

/*
 * Hvor imod denne metode med fordel kan bruges til kommentarer der fylder flere linjer
 * /
```


