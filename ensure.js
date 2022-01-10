function ensure(arr) {
  let array = arr.map((a) => a.toLowerCase());
  let result = array.includes("new folder");

  if (!result) {
    return "New Folder";
  } else {
    array.splice(array.indexOf("new folder"), 1);
    let numbers = array
      .map((a) => a.substring(a.indexOf("(") + 1, a.indexOf(")")))
      .map((i) => Number(i))
      .sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] != i + 2) {
        return `New Folder (${i + 2})`;
      }
    }

    return `New Folder (${numbers.length + 2})`;
  }
}

const array = ["new folder", "new folder (2)", "new folder (3)"];
