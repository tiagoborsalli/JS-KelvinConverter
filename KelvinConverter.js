const kelvin = 293; // Temperature in Kelvin
let celsius = kelvin - 273; // Difference is that Celsius is 273 degrees less than Kelvin.
let fahrenheit = celsius * (9/5) + 32; // Fahrenheit = Celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit); // Rounds the decimals down
console.log('This is my first JavaScript Challenge, 06/22/2022. It converts the temperature 293K from Kelvin to Fahrenheit e uses a built-in Math method to round down the decimals');
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log('Bonus Challenge: Convert celsius to Newton scale')
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature from Celsius to Newton is ${newton}`)