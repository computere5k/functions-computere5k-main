function addTwoNumbers(a, b) {
  var result = a + b;
  document.getElementById("named-function").innerHTML =
    a + " + " + b + " = " + result;
  console.log("Named Function Result: " + result);
}

var firstNumber = 5;
var secondNumber = 4;
var thirdNumber = 32;
var fourthNumber = 45;

addTwoNumbers(firstNumber, secondNumber);

var addSomethingElse = function () {
  var result = thirdNumber + fourthNumber;
  document.getElementById("anon-function").innerHTML =
    thirdNumber + " + " + fourthNumber + " = " + result;
  console.log("Anonymous Function Result: " + result);
};

addSomethingElse();
