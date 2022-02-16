// Reverse String
let string = "Hi I am Partha";

function reverseStr(string){
  let strArr = string.split('');
  let newArr = [];
  for (let i=strArr.length; i>=0; i--){
    newArr.push(strArr[i]);
  }
  return newArr.join('')
}

// reverseStr(string);

function reverseStr2(str){
  return [...str].reverse().join('')
}

// reverseStr2(string);

// return merged sorted array
function mergeSortedArray(arr1, arr2){
  let newArr = [...arr1, ...arr2];
  console.log(newArr);
  newArr.sort((b, a) => {
    return b - a;
  });
  console.log(newArr);
}

// mergeSortedArray([1, 8, 2, 31], [0, 3, 4, 30])

// Sum of two array
var twoSum = function(nums, target) {
    let uniqueNumbers = [];
    for(let i=0; i<nums.length; i++){
      if(uniqueNumbers.indexOf(nums[i]) != -1){
        console.log(uniqueNumbers);
        return [uniqueNumbers.indexOf(nums[i]), i];
      }
      uniqueNumbers.push(target-nums[i]);
    }
    return false;
};

twoSum([2,11,15,7], 9)
// return the indices of the result.