
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {return 0};
  let minValue = array[0];
  for (let arr of array) {
    if (arr == undefined) {return 0};
    if (arr < minValue) { minValue = arr };
  }
  return minValue;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {return 0};
  let maxValue = array[0];
  for (let arr of array) {
    if (arr == undefined) {return 0};
    if (arr > maxValue) { maxValue = arr };
  }
  return maxValue;
}


exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {return 0};
  let sum = 0;
  for (let arr of array) {
    if (arr == undefined) {return 0};
    sum += arr;
  }
  return sum / array.length;
}
