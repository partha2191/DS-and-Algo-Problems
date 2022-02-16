// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,5,1,1,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

let array = [1,1];

function recurringCharacter(array){
  if(array.length > 0){
    let set = new Set();
    for (let i=0; i<array.length; i++){
      if(set.has(array[i])){
        return `recurrung character is ${array[i]}`;
      } else {
        set.add(array[i]);
      }
    }
  }
}

let abc = recurringCharacter(array);
console.log(abc);
