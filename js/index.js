// Iteration 1: Names and Input

const hacker1 = "Rafael";
const hacker2 = "Google";

console.log("The driver´s name is " + hacker1);
console.log("The driver´s name is " + hacker2);

// Iteration 2: Conditionals

const a = hacker1.length;
const b = hacker2.length;

if (a > b) {
  return `The driver has the longest name, it has ${a} characters.`;
} else if (a < b) {
  return `It seems that the navigator has the longest name, it has ${b} characters.`;
} else {
  return `Wow, you both have equally long names, ${a} characters!`;
}

// Iteration 3: Loops

let nameupper = "";
for (let i = 0; i < hacker1.length; i++) {
  let space = hacker1[i] + " ";
  let upper = space.toUpperCase();

  nameupper = nameupper + upper;
}
console.log(nameupper);

/* 3.2 Deu Ruim!!
function reverseString(hacker1)
let reverse = " ";
for(i = hacker1.length -1; i >=0; i--) {
    reverse += hacker1[i]

return reverse
}*/
