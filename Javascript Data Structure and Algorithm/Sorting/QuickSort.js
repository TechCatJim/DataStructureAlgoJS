function swap(arr, ind1, ind2) {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

function baseCkeck(a, b) {
  return a - b;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  var storeIndex = start + 1;

  comparator = comparator !== undefined ? comparator : baseCkeck;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[i], pivot) < 0) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }
  swap(arr, start, storeIndex - 1);

  return storeIndex - 1;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }
  return arr;
}

quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
