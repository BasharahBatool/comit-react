const fruits = prompt("Enter your 5 fav fruits seperatedby comma. ");
const arr_fruit = fruits.split(",");
const [first_fav, second_fav, third_fav, ...rest_fruit] = arr_fruit;
alert(`Your top 3 fav fruits are ${first_fav},${second_fav},${third_fav}`);
alert(`Remaining fruits are: ${rest_fruit}`);
