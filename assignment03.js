// Convert Centigrade to Fahrenheit

const centigrade = parseFloat(prompt("Enter tmperature in Centigrade:"));
const fahrenheit = (centigrade * 9/5) + 32;

alert(`${centigrade}°C is ${fahrenheit}°F`);