function getDigit(num, i) {
  let newStr = num.toString();
  if (i >= newStr.length) return 0;
  return parseInt(newStr[newStr.length - i - 1]);
}

//count the number of digits
function digitCount(num) {
  let newStr = num.toString();
  return newStr.length;
}

//return the max number of digital digits in an array.
function mostDigits(nums) {
  let maxNum = 0;
  let temp = 0;

  nums.forEach((item, index) => {
    temp = digitCount(item);
    maxNum = temp > maxNum ? temp : maxNum;
  });
  return maxNum;
}

function radixSort(nums) {
  let maxDigit = mostDigits(nums);
  for (let k = 0; k < maxDigit; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
