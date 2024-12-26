function checkNumber(num) {
  // Check if the input is a number and satisfies both conditions
  if (typeof num === "number" && num % 2 === 0 && num % 5 === 0) {
    return true;
  }
  return false;
}

const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));
