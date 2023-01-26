function constructNote(str, chars) {
  // add whatever parameters you deem necessary - good luck!
  const charsMap = {};

  for (let char of chars) {
    charsMap[char] = ++charsMap[char] || 1;
  }

  for (let char of str) {
    if (!charsMap[char]) {
      return false;
    }
    charsMap[char]--;
  }
  return true;
}

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true
