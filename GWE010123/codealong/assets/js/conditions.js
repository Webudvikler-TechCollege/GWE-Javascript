/**
 * If/else/&& day hour greetings
 */
let greeting = ""
let hour = new Date().getHours()

if(hour >= 6 && hour < 10) {
	greeting = "Godmorgen"
} else if(hour >= 10 && hour < 19) {
	greeting = "Goddag"
} else if(hour >= 19 && hour < 23) {
	greeting = "Godaften"
} else {
	greeting = "Godnat"
}

console.log(`Greetings by daytime: ${greeting}`);

/**
 * If/else/&& Find district from zipcode
 */
let zipcode = 9210
let district;

if(zipcode > 999 && zipcode < 5000) {
	district = "Sjælland, Lolland-Falster & Møn"
} else if(zipcode > 4999 && zipcode < 6000) {
	district = "Fyn"
} else {
	district = "Jylland"
}

console.log(`Find district by zipcode: ${district}`);

let city;
if(zipcode === 9000 || zipcode === 9210 || zipcode === 9220) {
	city = "Aalborg"
}
console.log(`Eksempel på by med OR operator: ${city}`)


let switch_zipcode;
let switch_city = "Aalborg";

switch(city.toUpperCase()) {
	case "AALBORG":
		switch_zipcode = 9000
		break;
	case "KØBENHAVN":
		switch_zipcode = 1000
		break; 
	case "ODENSE":
		switch_zipcode = 5000
		break; 
	default:
		switch_zipcode = "Ukendt"
}

console.log(`Postnummeret på ${switch_city} er ${switch_zipcode}`);

/**
 * 
 */
let weekday = new Date().getDay()

switch(weekday + 1) {
	case 0:
		weekday = 'Søndag'
		break;
	case 1:
		weekday = 'Mandag'
		break;
	case 2:
		weekday = 'Tirsdag'
		break;
	case 3:
		weekday = 'Onsdag'
		break;
	case 4:
		weekday = 'Torsdag'
		break;
	case 5:
		weekday = 'Fredag'
		break;
	case 6:
		weekday = 'Lørdag'
		break;
}

console.log(`Ugedag: ${weekday}`);
