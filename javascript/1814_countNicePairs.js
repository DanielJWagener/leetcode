/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  var reverse = function (num) {
    return Number(num.toString().split("").reverse().join(""));
  };

  var nicify = function (x) {
    return x - reverse(x);
  };

  let map = new Map();

  let total = 0;

  for (let num of nums) {
    let nicifiedNum = nicify(num);
    if (map.get(nicifiedNum) === undefined) {
      map.set(nicifiedNum, 0);
    } else {
      let currentCount = map.get(nicifiedNum);
      map.set(nicifiedNum, ++currentCount);
      total += currentCount;
    }
  }

  return total % (10 ** 9 + 7);
};
