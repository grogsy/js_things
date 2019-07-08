function steamrollArray(arr) {
  var output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output = output.concat(steamrollArray(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}

// using reduce
function flatten(arr) {
  return arr.reduce(
    (accumulator, element) => Array.isArray(element) ? 
                              accumulator.concat(flatten(element)) :
                              accumulator.concat(element)

  , [])
}

steamrollArray([1, [2], [3, [[4]]]]);

var arr = [1, [2], [3, [[4]]]];
console.log(flatten(arr));
