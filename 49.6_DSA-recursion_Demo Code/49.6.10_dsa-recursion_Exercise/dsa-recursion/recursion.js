/** product: calculate the product of an array of numbers. */
console.log("running")
function product(nums, idx=0) {
  if(nums.length === idx) return 1;
  console.log(nums)
  return nums[idx] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestSoFar=0) {
  if(idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar)
  return longest(words, idx + 1, longestSoFar);

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, shortword="") {
  if(idx >= str.length) return shortword;
  shortword = shortword + str[idx]
  return everyOther(str, idx + 2, shortword) 
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx =0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if(leftIdx >= rightIdx) return true;
  if(str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx =0) {
  if(idx >= arr.length) return -1;
  if(arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, reverse="") {
  if(idx >= str.length) return reverse;
  reverse = str[idx] + reverse;
  return revString(str, idx+1, reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  //in object, if key value pair, look for string & add to array, then if new object, go into this object
  let stringArr = [];
  //looping through each item in the object,
  for (let key in obj) {
    //identifying if the item is a string, and then is it is, it is adding it to the string.Arr
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    //identifying if the item is an object & if it is, it is sending it back through teh loop of the function to make sure the loop is restarted.
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  //finally returns the entire string array.
  return stringArr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}
