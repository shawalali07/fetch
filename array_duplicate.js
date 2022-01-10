let arr = [1, 2, 2, 5, 7, 1];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

let array = [3, 5, 2, 3, 2];
const duplicateFirst = () => {
  let value = new Set();
  for (let i = 0; i < array.length; i++) {
    if (value.has(array[i])) return array[i];
    value.add(array[i]);
  }
  return "No duplicate";
};
console.log(duplicateFirst());


