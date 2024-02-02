/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestW = 0) {
  if (idx === words.length) return longestW;
  longestW = Math.max(words[idx].length, longestW);
  return longest(words, idx + 1, longestW);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newWord = "") {
  if (idx >= str.length) return newWord;
  newWord += str[idx];
  return everyOther(str, idx + 2, newWord);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(word, left = 0, right = word.length - 1) {
  if (left >= right) return true;
  if (word[left] !== word[right]) return false;
  return isPalindrome(word, left + 1, right - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx < 0) return newStr;
  newStr += str[idx];
  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key]);
    if (typeof obj[key] === "object")
      return strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  let midPoint = Math.floor((left + right) / 2);
  if (arr[midPoint] === val) return midPoint;
  if (left > right || val > right) return -1;
  if (val < arr[midPoint])
    return binarySearch(arr, val, left, (right = midPoint - 1));
  if (val > arr[midPoint])
    return binarySearch(arr, val, (left = midPoint + 1), right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
