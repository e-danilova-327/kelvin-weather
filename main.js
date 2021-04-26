// kelvin degrees
const kelvin = 293;

//celsius degrees
const celsius = kelvin - 273;

//fahrenheit degrees calculation equation
let fahrenheit = celsius * (9 / 5) + 32;

//rounding the fahrenheit degrees
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
