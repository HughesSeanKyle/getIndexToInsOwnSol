/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Own Solution

function getIndexToIns(arr, num) {                             //1

  //short circuit empty array and num === 1
  if (arr.length === 0 && num === 1) {                         //2
    return 0;                                                  //3
  };

  //sort arr
  const sortedArray = arr.sort((a ,b) => a > b ? 1 : -1);      //4

  //get max/min vals from sorted array
  const maxInArr = Math.max(...sortedArray);                   //5
  const minInArr = Math.min(...sortedArray);                   //6

  //handle num outside vals scope in array
  if (num > maxInArr) {                                       //7
    sortedArray.push(num);                                    //8
  } else if (num < minInArr) {                                //9
    sortedArray.unshift(num);                                 //10
  }

  //find index number where num belongs
  //retrieve Index of Slot
  const findIdx = sortedArray.findIndex((idx) => num <= idx); //11

  return findIdx;                                             //12
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*

//1

function which takes in two arguments:
  arg1 = Array
  arg2 = Number/Integer

//2, //3 
//short circuit empty array and num === 1

This if statement will "short circuit" the algorithm as per the instructions given. As per the instructions if the arguments given is "[], 1" then return zero

The if statement in //2, //3 will check if the array is empty by checking if the length is equal to zero. Likewise, num will be checked to see if it equals 1. 

If the above two conditions are met then the algorithm will "short circuit" and return with zero. 

//4
//sort arr

The sort() method sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

Source - [https://devdocs.io/javascript/global_objects/array/sort]

This line will take the array and store it into a variable via the sort array method. It will take in a and b as arguments to compare to one another. 

The a in this case will be the first value in the array and b will be the next value being compared. The b value will then become a and a new value will be compared till all items are checked in the array. 

Futher the line will check if a is greater than b via the ternary operator. By placing a positive 1 as the true value the array will be sorted in ascending order. [ 3, 3, 5, 20 ]

//5, 6
//get max/min vals from sorted array
This section will retrieve the highest and lowest values in the array and store them in variables for later use. 

The spread operator ('...') is used to tell Math.max and min to iterate through all values in the array and identify them all as arguments. 

//7, //8, //9, //10
//handle num outside vals scope in array

The push() method adds one or more elements to the end of an array and returns the new length of the array.
Source - [https://devdocs.io/javascript/global_objects/array/push]

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Source - [https://devdocs.io/javascript/global_objects/array/unshift]

This section will check if the input num is either greater and less than the max and min in the array. If it is greater it will be added at the end of the sorted array. If it is lesser it will by added at the beginning of the sorted array. 

//11
//find index number where num belongs
//retrieve Index of Slot

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.

Source - [https://devdocs.io/javascript/global_objects/array/findindex]

Line will find the index of where num was "slotted" in the sortedArray. 
The testing function inside the findIndex method will check if the num input is less than or equal to the index and return the index of that position. 

//12
returns the index location.

*/

