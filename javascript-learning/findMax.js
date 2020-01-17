function findMax(numbers) {
  for (var i = 0; i <= nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
}

var nums = [50, 1, 25, 3, 15, 23];
var max = null;

findMax(nums)
console.log(max)
