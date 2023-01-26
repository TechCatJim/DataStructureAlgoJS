function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  const result = [];
  const charsMap = {};

  for (let element of arr) {
    charsMap[element] = ++charsMap[element] || 1;
  }

  for (let key in charsMap) {
    if (charsMap[key] >= 2) {
      result.push(Number(key));
    }
  }

  return result;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1
