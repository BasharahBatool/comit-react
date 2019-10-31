const arr1 = [1, 2, 3, 4, 5];

//Map the above array into a new array of squared values and
// store that in a new variable
const squar_arr = arr1.map(num => num * num);

// Log both arrays to the console to view the difference
console.log(arr1);
console.log(squar_arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter the above values into even numbers only and
// store the result in a new variable
const even = arr2.filter(num => {
  if (num % 2 == 0) return num;
});

// Filter the above values into odd numbers only and
// store the result in a new variable
const odd = arr2.filter(num => {
  if (num % 2 != 0) return num;
});

// Log all 3 variables
console.log(arr2);
console.log(even);
console.log(odd);

// Create an array of 5 or more objects and
// store it in a variable
// Give each object a "name", "age", and "city" property with a value as well
const arr3 = [
  {
    name: "Mrs. Khan",
    age: 34,
    city: "saskatoon"
  },
  {
    name: "Aaraiz Khan",
    age: 16,
    city: "Calgary"
  },
  {
    name: "Khan",
    age: 45,
    city: "Saskatoon"
  },
  {
    name: "Maryam Khan",
    age: 12,
    city: "Saskatoon"
  },
  {
    name: "Ayesha Khan",
    age: 9,
    city: "Saskatoon"
  }
];

// Filter the above array into a new variable
// containing only people over the age of 30
const over_30 = arr3.filter(ages => {
  return ages.age > 30;
});

// Filter the above array into a new variable
// containing only people less than 20 AND live in Saskatoon
const under_20 = arr3.filter(ages => {
  return ages.age < 20 && ages.city == "Saskatoon";
});

// Map the above array into a new array containing
// just the age's of everyone and store it in a variable
const age2 = arr3.map(ages => ages.age);

// Log all of the arrays to the console
console.log(arr3);
console.log(over_30);
console.log(under_20);
console.log(age2);

// BONUS
// Create a function called stripVowels that takes in a string
// and returns the string with all vowels removed
function stripVowels(phrase) {
  const arr_string = phrase.split("");
  const consonants_arr = arr_string.filter(
    ch =>
      ch != "a" &&
      ch != "A" &&
      ch != "e" &&
      ch != "E" &&
      ch != "i" &&
      ch != "I" &&
      ch != "o" &&
      ch != "O" &&
      ch != "u" &&
      ch != "U"
  );
  const new_string = consonants_arr.join("");
  return new_string;
}

console.log(stripVowels("Miscellaneous"));
console.log(stripVowels("Antidisestablishmentarianism"));
console.log(stripVowels("SaskatOOnsmIles"));
