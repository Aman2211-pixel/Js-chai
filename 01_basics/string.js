const name="chakli"
const repo="vishal"

//console.log(name + repo + "value");

console.log(`Hello my name is ${name} and my repo is ${repo}`);

const gameName= new String(`Coc-cr`);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('C'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "     chikorita     "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chakli.com/chakli%20vishal"
console.log(url.replace('%20','-'));

console.log(url.includes('chakli'));
console.log(url.includes('zoro'));

console.log(gameName.split('-'));





