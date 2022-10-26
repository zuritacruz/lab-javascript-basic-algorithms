// Iteration 1: Names and Input

// ------------- 1.1 Create a variable hacker1 with the driver's name. -------------
// ------------- 1.2 Print "The driver's name is XXXX". -------------

const hacker1 = prompt('Insert driver\'s name:');
console.log(`The driver's name is ${hacker1}`);

// ------------- 1.3 Create a variable hacker2 with the navigator's name. -------------
// ------------- 1.4 Print "The navigator's name is YYYY". -------------

const hacker2 = prompt('Insert navigator\'s name:');
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// ------------- 2.1. Depending on which name is longer, print: -------------

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// ------------- 3.1 Print all the characters of the driver's name, separated by a space and in capitals.  -------------

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

// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra suscipit interdum. Donec molestie, lectus id sodales congue, turpis felis condimentum orci, a aliquet ex dui ac risus. Phasellus aliquet nisi vehicula urna vulputate, vel ultrices enim tincidunt. Nullam consequat pulvinar aliquet. Quisque vestibulum iaculis pretium. Aenean tempus dignissim viverra. Pellentesque vel purus sagittis, finibus magna a, laoreet velit. Morbi elementum, urna vitae ornare feugiat, nisl augue pellentesque eros, non rhoncus mauris quam eget dui. Donec id tempus nisl. In mattis bibendum gravida. Etiam porttitor lacus sed tincidunt rutrum. Nullam pulvinar metus tortor, at maximus odio posuere et.

Donec feugiat sit amet quam id vehicula. Aliquam faucibus egestas consectetur. Cras dignissim eros sed urna iaculis maximus. Nulla quis erat metus. Ut blandit sit amet est vitae mattis. Sed elementum egestas tincidunt. Nullam eget libero felis. Nulla vitae metus id nisl efficitur porttitor. Aliquam ac fermentum odio. Integer tincidunt nibh sed posuere accumsan. Proin iaculis elit iaculis turpis feugiat, sit amet pulvinar eros accumsan. Morbi egestas varius pulvinar. Nulla in purus malesuada, consectetur lorem at, ornare risus. Donec at suscipit lectus.

Suspendisse malesuada faucibus mauris quis sollicitudin. Donec sed elit id neque mollis commodo ac a ipsum. Aliquam facilisis nunc enim, id ornare eros porta ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vitae lacus at lorem consequat blandit a et ipsum. Nunc diam diam, auctor nec gravida ac, ullamcorper ac odio. Nunc nec condimentum ex.`;

let numOfWords = 0;

for (let i = 0; i < loremParagraph.length; i++) {
    if (loremParagraph[i] === ' ') {
        numOfWords += 1;
    }
}

console.log(numOfWords + 1);