// function findFloor(arr, value, low=0, high=arr.length-1) {
//   if(high< low) return -1;

//   if(high === low && arr[low] <= value){
//     return arr[low]
//   }else if(high === low && arr[low] > value){
//     return -1;
//   }
//   let mid = Math.floor((low + high)/2);
//   console.log("stuff")
//   if(arr[mid]<= value && value < arr[mid+1]){
//     console.log("1")
//     console.log(arr[mid+1])
//     return arr[mid];
//   }else if(arr[mid]<= value && mid== arr.length){
//     console.log("2")
//     return arr[mid]
//   }else{
//     return findFloor(arr, value, mid, high-1) 
//   }
// }

function findFloor(arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (num >= arr[high]) return arr[high];

  let mid = Math.floor((low + high) / 2)

  if (arr[mid] === num) return arr[mid];

  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
    return arr[mid - 1];
  }

  if (num < arr[mid]) {
    return findFloor(arr, num, low, mid - 1);
  }

  return findFloor(arr, num, mid + 1, high)
}
