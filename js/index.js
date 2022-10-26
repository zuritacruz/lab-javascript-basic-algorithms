// Iteration 1: Names and Input

const hacker1 = prompt('Insert driver\'s name:');
console.log(`The driver's name is ${hacker1}`);

const hacker2 = prompt('Insert navigator\'s name:');
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// ------------- 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e.  -------------

let CapitalizedDriver = '';

for (let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length) {
        CapitalizedDriver += hacker1[i].toUpperCase() + ' '
    } 
}

console.log(CapitalizedDriver.substring(0, CapitalizedDriver.length-1));

// ------------- 3.2 Print all the characters of the navigator's name, in reverse order. -------------
let reverseNavigator = '';

for (let i = hacker2.length-1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
}

console.log (reverseNavigator);

// ------------- 3.3 Depending on the lexicographic order of the strings, print: -------------

if (hacker1 < hacker2) {
    console.log('The driver\'s name goes first.');
} else if (hacker1 > hacker2) {
    console.log('Yo, the navigator goes first definitely.');
} else {
    console.log('What?! You both have the same name?')
}
