console.log("testing for count-zeroes file to come through")

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr)
  console.log(firstZero + "firstZero")
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  console.log('testing')
  if (high >= low) {
    console.log(high + low)
    let mid = low + Math.floor((high - low) / 2)
    console.log(mid)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      console.log(high + "high" + low + "low")
      return mid;

    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high)
    }
    return findFirst(arr, low, mid - 1)
  }
  console.log("negative 1")
  return -1;
}