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



