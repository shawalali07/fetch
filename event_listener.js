setTimeout(function() {
    console.log("timer");
}, 5000);

// callback function
function x(y) {
console.log("call x");
y();
}

x(function y() {
console.log("call y")
})

function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListener();
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(error => console.log("Error"))
