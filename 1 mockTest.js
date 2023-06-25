
// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]


// BRUTE FORCE APPROACH
const nums = [0,1,0,3,12];  
let arrangeZeros = nums.filter(Element => Element ===0);
let arrangeNonZeros = nums.filter(Element =>Element !== 0);
 
let arrangedArray = arrangeNonZeros.concat(arrangeZeros);
// console.log(arrangedArray);

// OPTIMIZED CODE
// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(1)
function arrangeNonZerosAndZeros (nums1){
let startArrIndex = 0;

for (let i = 0; i < nums1.length; i++) {
  if (nums1[i] !== 0) {
    nums1[startArrIndex] = nums1[i];
    startArrIndex++;
  }
}
while (startArrIndex < nums1.length) {
  nums1[startArrIndex] = 0;
  startArrIndex++;
}
}
let nums1 = [0, 1, 0, 3, 12]   // also i have checked it's working for 2nd input you can try  Example 2:
// Input: nums = [0]
// Output: [0]
arrangeNonZerosAndZeros(nums1)
console.log(nums1);