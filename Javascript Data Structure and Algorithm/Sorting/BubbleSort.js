function bubbleSort(array, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== "function") {
    comparator = (v1, v2) => {
      return v1 - v2;
    };
  }

  let length = array.length;
  let swap = true;
  while (length > 0 && swap) {
    swap = false;
    for (let i = 0; i < length - 1; i++) {
      if (comparator(array[i], array[i + 1]) > 0) {
        let tmp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tmp;
        swap = true;
      }
    }
    length--;
  }
  return array;
}

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
