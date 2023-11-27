/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let prefixSum = 0;
  let suffixSum = nums.reduce((acc, val) => acc + val, 0);
  let numsLength = nums.length;

  let previousValue = null;

  for (let i = 0; i < nums.length; i++) {
    if (previousValue !== null) {
      prefixSum += previousValue;
    }
    let currentValue = nums[i];

    suffixSum -= currentValue;

    let prefix = currentValue * i - prefixSum;
    let suffix = suffixSum - currentValue * (numsLength - i - 1);

    nums[i] = prefix + suffix;

    previousValue = currentValue;
  }

  return nums;
};
