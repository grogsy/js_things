function functionalGetDimSum(arr) {
  // functional recursion
  return arr.reduce(
    (sum, element) => Array.isArray(element) ? 
                sum + functionalGetDimSum(element) : sum + element
  , 0)
}

function imperativeGetDimSum(arr) {
  let sum = 0;

  // imperative recursion
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += imperativeGetDimSum(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

function anotherImperativeDimSum(arr) {
  // imperative non-recursion
  let stack = [...arr],
      sum = 0;
  while (stack.length) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      sum += element;
    }
  }
  
  return sum;
}


console.log(`functionalGetDimSum: ${functionalGetDimSum(arr)}`);
console.log(`imperativeGetDimSum: ${imperativeGetDimSum(arr)}`);
console.log(`anotherImperativeDimSum: ${anotherImperativeDimSum(arr)}`);
