const NUMBER_START = 1, NUMBER_END = 100;
const DIVISIBLE_3 = "Fizz", DIVISIBLE_5 = "Buzz", DIVISIBLE_3_5 = "FizzBuzz";
for (let i = NUMBER_START; i <= NUMBER_END; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(DIVISIBLE_3_5);
  } else if (i % 3 == 0) {
    console.log(DIVISIBLE_3);
  } else if (i % 5 == 0) {
    console.log(DIVISIBLE_5);
  } else {
    console.log(i);
  }
}