function sortedFrequency(array, target) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] < target) left++;
    if (array[right] > target) right--;
    if (array[left] === target && array[right] === target)
      return right - left + 1;
  }

  return -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
