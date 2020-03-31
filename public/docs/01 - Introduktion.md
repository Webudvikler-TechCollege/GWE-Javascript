# Javascript: Introduktion

Javascript er et scripting sprog - eller det man kalder et lightweight programmeringssprog.

Javascript kan placeres inline i dit html dokument eller i en ekstern fil som du så henviser til i dit html dokument.

Det er smag og behag hvordan man gør det. Jeg vil altid anbefale at placere dine scripts i eksterne filer men du vil også se eksempler hvor jeg anvender inline javascript i mine filer. Det afhænger af hvad der passer bedst til den opgave man er i gang med.

Det er altså ikke forkert at bruge det ene eller det andet men på sigt kan det give et bedre overblik at placere dine javascripts i eksterne filer.
___
## Eksempel på *Inline Javascript* 
Inline Javascript skal indsættes i script tagget:
```html
<script>
...
</script>
```
Script tagget placeres i dit &lt;head&gt; eller &lt;body&gt; tag.
___
## Eksempel på *Ekstern Javascript* 
Eksterne javascripts placeres typisk i en */js/* mappe eller */assets/js/* og har filtypen *.js*.

Du skal ikke bruge &lt;script&gt; i en js fil.

Men du skal bruge &lt;script&gt; tagget når du skal referere til javascript filen inde fra dit html dokument. Dette gør du ved hjælp af attributten *src*.

Eksempel:
```html
<script src="/js/my-js-functions.js"></script>
````
___
## Vigtig info om placering af script tag!
I mange tilfælde bruger vi javascript til at manipulere vores html elementer med. 

Et typisk scenarie kunne foregå som følgende:

* Browseren indlæser HTML og CSS
* Bruger foretager en handling i form af at klikke på et element eller pege på det med musen.
* Handlingen aktiverer et javascript som påvirker elementet f.eks. ved at ændre baggrundsfarven eller vise/skjule et element.

Det kræver at alt vores html er læst ind i browseren inden vi kører vores javascript.

Derfor kan det i mange tilfælde være en fordel at placere scriptet i slutningen af dit <body> tag.

Eksempel:
```html
<html>
    <head>
        <title>Velkommen</title>
    </head>
<body>

    <header>
        <h1>Velkommen</h1>
    </header>
    
    <main>Siden indhold</main>
    
    <footer>
        &copy; TechCOLLEGE 2020
    </footer>

    <script src="/js/my-js-functions.js"></script>
</body>
</html>
````

