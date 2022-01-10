// print loop after each second
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// print loop after each second
for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  }
  close(i);
}

// function statement aka function declaration
function a() {
    console.log("a is called");
}

// function expression
var b = function() {
    console.log("b is called")
}

// anonymous function
// function() {

// }

// named function expression
var b = function a() {

}

// first class functions
var a = function (x) {
  console.log("First class function");
};
a(function () {});

// callback function
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("Welcome to this Javascript"));

function Reverse(str) {
  if (str === null) {
    return null;
  }
  if (str.length <= 1) {
    return str;
  }
  var first = str[0];
  var last = str[str.length - 1];
  var str1 = Reverse(str.substring(1, str.length - 1));
  return last + str1 + first;
}

var result = Reverse("Welcome to this Javascript");
console.log(result)

let str = "Welcome to this Javascript";

function reverseString(str) {
  function reverse(str) {
    if (str === "") return "";
    else return reverse(str.substr(1)) + str.charAt(0);
  }

  return reverse(str).split(" ").reverse().join(" ");
}

console.log(reverseString(str));
