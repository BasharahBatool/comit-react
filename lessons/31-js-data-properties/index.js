const favmov = prompt("Enter 3 favorite movies, seperatedby comma.");
const movie_arr = favmov.split(",");
for (let name of movie_arr) {
  console.log(name);
}

function reverseString(sent) {
  const sent_arr = sent.split("");
  const string_rever = sent_arr.reverse();
  return string_rever.join("");
}

const sentence = prompt("Enter a sentence to reverse.");

alert(reverseString(sentence));
