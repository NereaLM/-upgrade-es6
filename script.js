//ITERACIÓN #1: Arrows

//Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.


let arrowFunction = (a = 10, b = 5) => {
	let total = a + b
	console.log(total)
}


// 1.1 Ejecuta esta función sin pasar ningún parametro
// 1.2 Ejecuta esta función pasando un solo parametro
// 1.3 Ejecuta esta función pasando dos parametros


console.log(arrowFunction())
console.log(arrowFunction(8))
console.log(arrowFunction(5 , 9))



//ITERACIÓN #2: Destructuring

//2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
 
let {title} = game
console.log(title)

let {gender} = game
console.log(gender)

let {year} = game
console.log(year)



// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits
   
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
   return {name: 'Bengal Tiger', race: 'Tiger'}
};


let {name, race} = animalFunction()
console.log(name)
console.log(race)


// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let { name, itv } = car
let [year1, year2, year3] = car.itv
console.log(name)
console.log(itv)
console.log(year1)
console.log(year2)
console.log(year3)





 //ITERACIÓN #3: Spread Operator


//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

let pointsListCopy = [...pointsList]
 console.log("pointsListCopy: ", pointsListCopy)



//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toyCopy = {...toy}
 console.log("toyCopy: ", toyCopy)


//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

let pointListConcat = [...pointsList2,...pointsList3]
console.log("pontListConcat: ", pointListConcat)



//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let newToy = {...toy1,...toyUpdate}
console.log("newToy: ", newToy)



//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsCopy = [...colors]
colorsCopy.splice(2,1)
console.log("colorsCopy: ", colorsCopy)




//ITERACIÓN #4: Map


//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let usersNames = users.map(user => user.name)
console.log("Users names: ", usersNames)



//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let users1Names = users1.map((user) => {
	if(user.name[0] === "A") {
		user.name = "Anacleto"
	}
	return user.name
  })
  console.log("Users1 names: ", users1Names)
  


//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let visitedCites = cities.map((city) => {
    if(city.isVisited === true) {
        city.name = city.name + "(Visitado)"
    }
    return city.name
})
console.log("Visited Cities: ", visitedCites)




//Iteración #5: Filter


//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let filterAges = ages.filter(age => age > 18)
console.log("Edades > 18: ", filterAges)


//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let filterAges1 = ages1.filter(age => age%2==0)
console.log("Valores pares: ", filterAges1)



//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
   {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
   {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
   {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
   {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let filterStreamers = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends" )
console.log("Streamer filtrado: ", filterStreamers)




//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers1 = [
   {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
   {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
   {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
   {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let filterStreamers1 = streamers1.filter(streamer => streamer.name.includes("u"))
console.log("Streamer filtrado 1: ", filterStreamers1)


//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

let filterStreamer3 = streamers1.filter((streamer) => {
   if(streamer.age > 35) {
	   streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
	   return streamer.gameMorePlayed.toUpperCase().includes("Legends".toUpperCase())
   }
   return streamer.gameMorePlayed.includes("Legends")
})

console.log("Streamer filtrado 3: ",filterStreamer3)





//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Siintroduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
   {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
   {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
   {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
   {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

window.onload = () => {

	let body = document.querySelector("body")
  
	let input = document.querySelector("input")
	let filterStreamer4 
	let button = document.querySelector('button') 
	button.addEventListener("click", () => {
		filterStreamer4 = streamers3.filter(streamer => {
		 if(streamer.name.toUpperCase().includes(input.value.toUpperCase())) {
			 return streamer
		 }   
		})
		console.log(filterStreamer4)
	})
  
	input.addEventListener("input", () => {
  
	})
  
	} 


	
//ITERACIÓN #6: Find


//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

let findNumber = numbers.find(number => number === 100)
console.log("Found Number: ", findNumber)


//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
   {title: 'Madagascar', stars: 4.5, date: 2015},
   {title: 'Origen', stars: 5, date: 2010},
   {title: 'Your Name', stars: 5, date: 2016}
];

let findMovie = movies.find(movie => movie.date === 2010)
console.log("Found Movie: ", findMovie)


// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
   {name: 'Zalamero', planet: 'Eden', age: 4029},
   {name: 'Paktu', planet: 'Andromeda', age: 32},
   {name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
   {name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
   {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
   {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let findAlien = aliens.find(alien => alien.name === "Cucushumushu")
console.log(findAlien)
let findMutation = mutations.find(mutation => mutation.name === "Porompompero")
console.log(findMutation)

let fusion = {...findAlien, mutation: findMutation}
console.log("Fusion: ", fusion) 

