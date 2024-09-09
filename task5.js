////////////////////////////////////////////

function monthlySavings(array, number) {
  if (!Array.isArray(arguments[0] || typeof arguments[1] !== "number")) {
    return "invalid input";
  }
  sum = 0;
  for (let item of array) {
    if (item >= 3000) {
      item = item - item * 0.2;
    }

    sum = sum + item;
  }
  let savings = sum - number;

  if (savings >= 0) {
    return savings;
  } else if (savings < 0) {
    return "earn more";
  }
}

let remainingTk = monthlySavings([1000, 2000, 3000], 5400);
console.log(remainingTk);

let remainingTk2 = monthlySavings([1000, 2000, 2500], 5000);
console.log(remainingTk2);

let remainingTk3 = monthlySavings([900, 2700, 3400], 10000);
console.log(remainingTk3);

let remainingTk4 = monthlySavings(100, [900, 2700, 3400]);
console.log(remainingTk4);
