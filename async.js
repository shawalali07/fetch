async function Shawal() {
  console.log("Inside Shawal function");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("Before response");
  const users = await response.json();
  console.log("Users resolved");
  return users;
}

console.log("Before calling Shawal");
let a = Shawal();
console.log("After calling Shawal");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line");
