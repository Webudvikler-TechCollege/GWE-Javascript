# Javascript Variabler

Variabler bruges hele tiden i javascript - og i alle former for programmeringssprog.

En variabel er en slags container hvor vi kan lagre  dataværdier. Det særlige ved en variabel er - som navnet siger - at vi har mulighed for løbende at ændre dataværdien.

Variabler består af en nøgle (*key*) og en værdi (*value*).

Når vi opretter en variabel hedder det i fagsprog at vi **_deklarerer_** en variabel. Det betyder at vi angiver variablen med et navn (key) og tildeler den en værdi (value).

Til at deklarere vores variabel skal vi bruge keywordet `let`.

**Eksempel - Deklaration af en variabel:**

```js
let key = value;
```
En variabel skal kun deklareres een gang indenfor samme scope. Hvis du senere vil ændre værdien skal du ikke bruge `let`foran:
```js
// Deklarering 
let key = value;

// Ændring af værdi
key = another_value;
```
Du bestemmer selv navnet på din variabel. Det er en god ide at give dem navne der er sigende for værdien. I  programmering bruger man typisk engelske begreber til sine variabler.

**Eksempel - Navngivning af variabler:**
```js
let firstname = "Per";

let birthday = "1988-07-21";

let zipcode = 9000;

let total_amount = 199.99;
```

En dataværdi kan være et navn, et heltal eller et decimaltal. Det kan også være andre ting men det ser vi på senere under datatyper.

## Algebra, algoritmer og værdier 

Flere af jer kan sikkert huske principperne i algebra fra matematikkens verden. I programmering bruger vi de selvsamme principper med forskellige algoritmer i form af små scripts, der kan udføre enkelte handlinger. Overordnet set er sådan en algoritme en opskrift på at løse et bestemt problem i en bestemt situation. 

Hvis vi forestiller os at vores script er en  foodprocesser som hakker og blander ingredienser på en bestemt måde. Så vil vores resultat altid have den samme konsistens men smagen vil afhænge af hvilke ingredienser vi tilsætter maskinen. 

På samme måde kan vi have forskellige scripts som udfører en bestemt handling med de værdier vi fylder i dem. Beregningsmetoden er den samme men resultatet afhænger af værdierne vi henter ind i scriptet.

Det her ligger tæt op af algebra fra matematikkens verden.

I nedenstående eksempel skal vores script omregne danske kroner til euro. Algoritmen er den samme men ved at ændre værdien på variablen `amount_dkk` kan vi ændre resultatet:
```js
// Deklarerer variabel til beløb i danske kroner
amount_dkk = 100;

// Deklarerer variabel med valuta kurs for euro (1 DKK = 0.13 €)
currency_rate_ecu = 0.13;

// Deklarerer variabel til resultatet
result = (amount_dkk * currency_rate_ecu);

// Udskriver resultatet
console.log(result);
```
I ovenstående eksempel kan vi altså nøjes med at ændre værdien af variablen `dkk_amount` for at påvirke vores resultat.


