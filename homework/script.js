function clicky() {
  let num1 = prompt("enter num1");
  let num2 = prompt("enter num1");
  let remainder = num1 % num2;

  if (remainder != 0) {
    alert(remainder);
  } else {
    alert("no remainder");
  }
}
