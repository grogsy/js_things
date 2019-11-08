// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  if (n === 1) {
    // 1 till is basically the sum of all the times taken
    return customers.reduce((accum, item) => accum + item, 0);
  } else if (n > customers.length) {
    // having more tills than customers is basically which customer takes the longest
    return Math.max(...customers);
  }

  // initialize tills
  let tills = [];
  for (let i = 0; i < n; i++) {
    tills[i] = 0;
  }

  let minTime;
  let totalTime = 0;

  while (customers.length) {
    // 1. find which tills are empty and then enqueue
    for (let i = 0; i < n; i++) {
      if (tills[i] <= 0 && customers[0]) {
        tills[i] = customers.shift();
      }
    }

    // 2. check for min time
    minTime = Math.min(...tills);

    // accumulate total elapsed time based on min time
    totalTime += minTime;

    // 3. updating time taken on queues based on minTime
    tills = tills.map(t => t - minTime);
  }

  // accumulate the remaining people checking out, add whoever takes the longest in this last iteration
  totalTime += Math.max(...tills);

  return totalTime;
}
