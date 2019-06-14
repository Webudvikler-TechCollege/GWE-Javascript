# Var, let & const

Variabler kan defineres på tre forskellige måder i javascript. Før ES6 brugte den gamle * *var* * metode og med ES6 blev metoderne * *let* * og * *const* * tilføjet. 

Der er selvfølgelig forskelle på dem og dem vil vi kigge på herunder.

## Var

Førhen brugte man * *var* * til at deklarere variabler. Da havde Javascript to typer af anvendelsesområder for variabler: * *Global Scope* * og * *Function Scope* *.

### Global scope

En variabel i et global scope er, når variablen erklæres uden for en funktion.

### Local scope

En variabel i et local scope er, når variablen erklæres inde i en funktion og dermed kun kan tilgås indenfor funktionen lokale scope.

Eksempel:

```
var global = "Hej verden";

function myFunction() {
    var local = "Hej Vejgård";
}
```

ES2015 introducerede to vigtige nye JavaScript-søgeord: lad og const.

Disse to nøgleord giver variabler for blokomfang (og konstanter) i JavaScript.

Før ES2015 havde JavaScript kun to typer af anvendelsesområde: Global Scope og Function Scope.

Før fremkomsten af ​​ES6 var varklæringerne regerede som konger. Der er problemer forbundet med variabler, der er erklæret med var. Derfor var det nødvendigt, at nye måder til at erklære variabler fremkommer. Først skal vi dog forstå var mere, før vi diskuterer et af disse spørgsmål.

Omfanget af var

Anvendelsesområde betyder i det væsentlige, hvor disse variabler er tilgængelige til brug. var erklæringer er globalt scoped eller funktion / lokalt scoped. Det er globalt scoped, når en var-variabel erklæres uden for en funktion. Det betyder, at en variabel, der er erklæret med var uden for en funktionsblok, er tilgængelig til brug i hele vinduet. var er funktion scoped, når den er erklæret inden for en funktion. Det betyder, at den er tilgængelig og kun tilgængelig i den pågældende funktion.
For yderligere at forstå, se nedenstående eksempel.

    var greeter = "hej hej";

    funktion newFunction () {
        var hej = "hej";
    }
Her er greeter globalt scoped, fordi den eksisterer uden for en funktion, mens hej er funktion scoped. Så vi kan ikke få adgang til variablen hej uden for en funktion. Så hvis vi gør dette:

    var tester = "hej hej";

    funktion newFunction () {
        var hej = "hej";
    }
    console.log (Hej); // fejl: hej er ikke defineret
Vi får en fejl, som skyldes, at hej ikke er tilgængelig uden for funktionen.

Var-variabler kan omdeklareres og opdateres

Det betyder, at vi kan gøre dette inden for samme rækkevidde og ikke får en fejl.

    var greeter = "hej hej";
    var greeter = "siger hej i stedet";
og dette også

    var greeter = "hej hej";
    greeter = "siger hej i stedet";
Hævning af var

Hævning er en JavaScript-mekanisme, hvor variabler og funktionsdeklarationer flyttes til toppen af ​​deres rækkevidde, før kodekørsel. Hvad dette betyder er, at hvis vi gør dette:

    console.log (greeter);
    var greeter = "siger hej"
det fortolkes som dette

    var greeter;
    console.log (greeter); // greeter er udefineret
    greeter = "siger hej"
Så variabler hæves til toppen af ​​dens omfang og initialiseres med en værdi af udefineret.

Problem med var

Der er en svaghed, der følger med var. Jeg bruger nedenstående eksempel for at forklare dette.

    var greeter = "hej hej";
    var gange = 4;

    hvis (gange> 3) {
        var greeter = "siger hej i stedet";
    }

    console.log (greeter) // "sig hej i stedet"
Så, da gange> 3 returnerer sande, er greeter omdefineret til at sige "Hej i stedet". Selvom dette ikke er et problem, hvis du bevidst vil have, at greeter skal omdefineres, bliver det et problem, når du ikke er klar over, at en variabel greeter allerede er defineret før.
Hvis du har brug for greeter i andre dele af din kode, kan du blive overrasket over det output, du måtte få. Dette kan medføre mange fejl i din kode. Det er derfor, let og const er nødvendigt.

LADE
Lad er foretrukket for variabel angivelse nu. Det er ikke overraskende, da det kommer til en forbedring af var-erklæringerne. Det løser også dette problem, der blev rejst i den sidste underposition. Lad os overveje, hvorfor det er sådan.

lad er blokeret scoped

En blok er en del af kode afgrænset af {}. En blok bor i krøllede beslag. Alt inden for krøllet beslag er en blok. Så en variabel erklæret i en blok med let er kun tilgængelig til brug inden for denne blok. Lad mig forklare dette med et eksempel.

   lad hilsen = "siger hej";
   lad gange = 4;

   hvis (gange> 3) {
        lad hej = "siger hej i stedet";
        console.log (hej); // "sig hej i stedet"
    }
   console.log (hej) // hej er ikke defineret
Vi ser at ved hjælp af hej uden for sin blok (de krøllede seler, hvor den blev defineret) returnerer en fejl. Dette skyldes, at lad variabler er blokeret.

Lad kan opdateres, men ikke omdeklareres.

Ligesom var, kan en variabel erklæret med let, opdateres inden for sit anvendelsesområde. Unlikevar kan en let-variabel ikke omdefineres inden for sit anvendelsesområde. Så mens dette vil fungere,

    lad hilsen = "siger hej";
    hilsen = "siger hej i stedet";
Dette vil returnere en fejl.

    lad hilsen = "siger hej";
    lad hilsen = "siger hej i stedet"; // fejl: identifikator "hilsen" er allerede blevet erklæret
Men hvis den samme variabel er d



