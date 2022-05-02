// Eksempel på en variabel deklareret med let
let x = 10;

// En let variabel kan overskrives
x = 20

// ...men ikke redeklareres i samme scope
let x = 1 // => fejl!

// Til gengæld kan den deklareres i et nyt scope
{
  let x = 20;
}

//console.log(x);

// En konstant deklareres med en fast værdi
const y = 10;

// Denne værdi kan ikke ændres når den først er sat
y = 20 // => fejl!

// En const kan også deklareres i et nyt scope
{
  const y = 20;
}
