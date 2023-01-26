function countZeroes(array) {
  // add whatever parameters you deem necessary - good luck!!!
  let leftIndex = 0;
  let rightIndex = array.length;
  let midPoint = 0;

  while (leftIndex < rightIndex) {
    midPoint = Math.floor((leftIndex + rightIndex) / 2);
    if (array[midPoint] === 1) {
      leftIndex = midPoint + 1;
    } else {
      rightIndex = midPoint;
    }
  }
  return array.length - leftIndex;
}

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
