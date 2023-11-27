/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let executeBackspaces = function (str) {
    let arr = str.split("");
    let deleteCount = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (arr[i] === "#") {
        arr[i] = "";
        deleteCount++;
      } else if (arr[i] && deleteCount) {
        arr[i] = "";
        deleteCount--;
      }
    }
    return arr.join("");
  };
  return executeBackspaces(s) === executeBackspaces(t);
};
