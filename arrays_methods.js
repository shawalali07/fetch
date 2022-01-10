// ------------------------global variables---------------------------
let fruits = ["Mango", "Apple", "Strawberry", "Banana"];
let numbers = [1, 2, 3, 4];
let subtract = [130, 20, 50];
let numbers2 = [5, 6, 7, 8];
let ages = [16, 20, 22, 24];
let sentence =
  "I will explore the Polo47. The Polo47 is just my (Shawal's) imagination.";

// -------------------------at Function-------------------------------
const arrAt = () => {
  let arr1 = [1, 2, 3];
  console.log("at", arr1.at(-1));
};
// arrAt();

// -------------------------concate Function-------------------------------
const arrConcat = () => {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log("concatenation", arr1.concat(arr2));
};
// arrConcat();

// -------------------------constructor Function-------------------------------
const arrConstructor = () => {
  let arr1 = [1, 2, 3];
  console.log("constructor", arr1.constructor);
};
// arrConstructor();

// -------------------------from Function-------------------------------
const arrFrom = () => {
  let arr1 = "Shawal";
  let arr2 = Array.from(arr1);
  console.log("from", arr2);
};
// arrFrom();

// -------------------------isArray Function-------------------------------
const arrIsArray = () => {
  let arr = [1, 2, 3];
  let result = Array.isArray(arr);
  console.log("isArray", result);
};
// arrIsArray();

// -------------------------indexOf Function-------------------------------
const arrIndexOf = () => {
  let arr = ["Cricket", "Football", "Hockey", "Tennis"];
  console.log("indexOf", arr.indexOf("Cricket"));
};
// arrIndexOf();

// -------------------------copyWithin Function-------------------------------
const arrCopyWithin = () => {
  let arr = ["Cricket", "Football", "Hockey", "Tennis"];
  console.log("copyWithin", arr.copyWithin(2, 0, 1));
};
// arrCopyWithin();

// -------------------------entries Function-------------------------------
const arrEntries = () => {
  let arr = ["Tea", "Coffee", "Juice"];
  let a = arr.entries();
  for (let i = 0; i < arr.length; i++) {
    console.log("entries", a.next().value);
  }
};
// arrEntries();

// -------------------------every Function-------------------------------
const arrEvery = (i) => {
  const ages = [21, 24, 27];
  console.log(
    "less than your parameter",
    ages.every((a) => a < i)
  );
};
// arrEvery(24);

// -------------------------fill Function-------------------------------
const arrFill = () => {
  let filled = fruits.fill("Apple");
  console.log("filled", filled);
};
// arrFill();

// -------------------------filter Function-------------------------------
const arrFilter = (a) => {
  return a > 18;
};
// console.log("filter", ages.filter(arrFilter));

// -------------------------find Function-------------------------------
const arrFind = (a) => {
  return a > 19;
};
console.log(ages.find(arrFind));

// -------------------------findIndex Function-------------------------------
const arrFindIndex = (a) => {
  return a > 15;
};
// console.log("findIndex", ages.findIndex(arrFindIndex));

// -------------------------flat Function-------------------------------
const arrFlat = () => {
  const numbers = [
    ["1", "2"],
    ["3", "4", ["5", ["6"], "7"]],
  ];
  console.log("flat", numbers.flat(3));
};
// arrFlat();

// -----------------flat map

const arrFlatMap = () => {
  sentence.map((x) => x.split(" "));
  sentence.flatMap((x) => x.split(" "));
  console.log(sentence.flatMap());
};
// arrFlatMap();

// -------------------------forEach Function-------------------------------
const arrForEach = () => {
  console.log("forEach");
  fruits.forEach((x) => console.log(x));
};
// arrForEach();

// -------------------------includes Function-------------------------------
const arrIncludes = () => {
  console.log(fruits.includes("Mango"));
};
// arrIncludes();

// -------------------------key Function-------------------------------
const arrKey = (array) => {
  const iterator = array.keys();
  console.log("");
  for (const key of iterator) {
    console.log(key);
  }
};
// arrKey(fruits);

// -------------------------map Function-------------------------------
const arrMap = (array) => {
  console.log("---map---");
  array.map((a) => console.log(a));
};
// arrMap(fruits);

// -------------------------push Function-------------------------------
const arrPush = (array) => {
  console.log("---push---");
  array.push("Kiwi");
  console.log(array);
};
// arrPush(fruits);

// -------------------------pop Function-------------------------------
const arrPop = (array) => {
  console.log("---pop---");
  array.pop();
  console.log(array);
};
// arrPop(fruits);

// -------------------------splice Function-------------------------------
const arrSplice = (array) => {
  console.log("---splice---");
  array.splice(2, 1, "Grapes");
  console.log(array);
};
// arrSplice(fruits);

// -------------------------shift Function-------------------------------
const arrShift = (array) => {
  console.log("---Shift---");
  console.log("before shift", array);
  array.shift();
  console.log("after shift", array);
};
// arrShift(fruits);

// -------------------------join Function-------------------------------
const arrJoin = () => {
  // console.log(fruits.join());
};
// arrJoin();

// -------------------------lastIndexOf Function-------------------------------
const arrLastIndexOf = () => {
  // console.log(sentence.lastIndexOf("Polo47"));
};
// arrLastIndexOf();

// -------------------------reduce Function-------------------------------
const arrReduce = (total, num) => {
  return total - num;
};
// console.log(subtract.reduce(arrReduce));

// -------------------------reduceRight Function-------------------------------
const arrReduceRight = (total, num) => {
  return total - num;
};
// console.log(subtract.reduceRight(arrReduceRight));

// -------------------------reverse Function-------------------------------
const arrReverse = () => {
  console.log(numbers.reverse());
};
// arrReverse();

// -------------------------slice Function-------------------------------
const arrSlice = () => {
  console.log(numbers.slice(1, 3));
};
// arrSlice();

// -------------------------some Function-------------------------------
const arrSome = (age) => {
  return age < 15;
};
// console.log(ages.some(arrSome));

// -------------------------sort Function-------------------------------
const arrSort = () => {
  console.log(fruits.sort());
};
// arrSort();

// -------------------------toLocaleString Function-------------------------------
const arrToLocaleString = () => {
  let date = new Date();
  console.log(date.toLocaleString());
};
// arrToLocaleString();

// -------------------------toString Function-------------------------------
const arrToString = () => {
  console.log(fruits.toString());
};
// arrToString();

// -------------------------unShift Function-------------------------------
const arrUnShift = (array) => {
  console.log("before shift", array);
  array.unshift("PineApple");
  console.log("after unshift", array);
};
// arrUnShift(fruits);

// -------------------------values Function-------------------------------
const arrValues = () => {
  const iterator = fruits.values();
  for (const value of iterator) {
    console.log(value);
  }
};
// arrValues();
