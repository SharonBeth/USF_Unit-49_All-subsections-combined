function merge(arr1, arr2) {
    let finalArray = []
    let i = 0;
    let j = 0;
    //this is a while loop that 
    while(i < arr1.length && j <  arr2.length){
        if(arr1[i]< arr2[j]){
            finalArray.push(arr1[i])
            console.log(finalArray)
            i++;
        }else{
            finalArray.push(arr2[j])
            console.log(finalArray)
            j++;
        }
    }
    while(i< arr1.length){
        finalArray.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        finalArray.push(arr2[j])
        j++;
    }
    return finalArray;
}

function mergeSort(arr) {
    //if the original arr length is 1 or less, then the array is sorted because 0 is empty and 1 needs no comparison.
    if (arr.length <= 1) return arr;
    //creating a middle point to compare to for one array.
    const mid = Math.floor(arr.length / 2);
    //this is thaking the left side of the array and slicing it between 0 & the "mid" point.
    const left = mergeSort(arr.slice(0, mid));
    //this is taking the right side of the array and slicing it from the mid point on is saying from the beginning of mid number index of the array to the end of the array when there is only one number.
    const right = mergeSort(arr.slice(mid));
    
    //this returns the result from the above merge function with the left & right by sorting them through merge.
    return merge(left, right);

}
