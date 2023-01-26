function findRotatedIndex(arr, value) {
  var index = -1;
  var count = 0;
  function helper(arr, start, end) {
    if (start == end) {
      if (arr[start] == value) {
        index = count;
      }
      count++;
      return;
    }
    if (start <= end) {
      let mid = Math.floor((start + end) / 2);
      helper(arr, start, mid);
      helper(arr, mid + 1, end);
      return;
    }
  }
  helper(arr, 0, arr.length - 1);
  return index;
}

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16); // 5
