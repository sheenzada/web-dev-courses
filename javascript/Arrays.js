const fruits = ['apple', 'banana', 'cherry', 'date'];

console.log("--- 1. JOIN ---");
// join() converts an array to a string. Default is a comma.
console.log("Standard Join:", fruits.join());      // "apple,banana,cherry,date"
console.log("Custom Join:  ", fruits.join(' - ')); // "apple - banana - cherry - date"
console.log("No-space Join:", fruits.join(' '));    // "applebananacherrydate"


console.log("\n--- 2. REVERSE (Mutates Original) ---");
const numbers = [1, 2, 3, 4, 5];

console.log("Reversed:", numbers); 
numbers.reverse(); 
console.log("Original:", numbers);

console.log("\n--- 3. TOREVERSED (Modern / Non-destructive) ---");
const colors = ['red', 'green', 'blue'];
const reversedColors = colors.toReversed(); // ES2023 syntax
console.log("New Array: ", reversedColors); 
console.log("Original:  ", colors);        



console.log("\n--- 4. THE STRING REVERSAL TRICK ---");
const word = "JavaScript";
const reversedWord = word.split('').reverse().join('');
console.log(`"${word}" backwards is "${reversedWord}"`);



console.log("\n--- 5. OTHER COMMON PROPERTIES/METHODS ---");
const tech = ['HTML', 'CSS', 'JS'];

// Length Property
console.log("Length:   ", tech.length); // 3

// Sort (Alphabetical by default)
console.log("Sorted:   ", [...tech].sort()); 


// Includes (Check existence)
console.log("Includes: ", tech.includes('JS'));