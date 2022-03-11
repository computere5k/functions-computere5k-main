// Named function
function addTwoNumbers(a, b) {
  var result = a + b;
  document.getElementById("named-label").innerHTML = namedLabel;
  document.getElementById("named-function").innerHTML =
    a + " + " + b + " = " + result;
  console.log(namedLabel + ": " + a + " + " + b + " = " + result);
}

var firstNumber = 5;
var secondNumber = 4;
var thirdNumber = 32;
var fourthNumber = 45;

//Labels for various functions in console and on page
var namedLabel = "Named Function";
var anonLabel = "Anonymous Function";
var anonPassedLabel = "Variable Passed Through Anonymous Function";

addTwoNumbers(firstNumber, secondNumber);

// Anonymous function
var addSomethingElse = function () {
  var result = thirdNumber + fourthNumber;
  document.getElementById("anon-label").innerHTML = anonLabel;
  document.getElementById("anon-function").innerHTML =
    thirdNumber + " + " + fourthNumber + " = " + result;
  console.log(
    anonLabel + ": " + thirdNumber + " + " + fourthNumber + " = " + result
  );
};

addSomethingElse();
