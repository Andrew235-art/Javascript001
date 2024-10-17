// Compute age app

const name = prompt("Enter your name:");
const YOB = parseInt(prompt("Enter  your year of birth:"));
const currentYear = new Date().getFullYear();
const age = currentYear - YOB;

alert(`${name}, your age is ${age}`)