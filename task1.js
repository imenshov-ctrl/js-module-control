function summarizeNumbers(numbers) {
  if (numbers.length === 0) {
    return { count: 0, sum: 0, evenCount: 0, max: undefined, category: "empty" };
  }

  let sum = 0;
  let evenCount = 0;
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    sum += n;
    if (n % 2 === 0) evenCount++;
    if (n > max) max = n;
  }

  const category = sum > 0 ? "positive" : "non-positive";

  return { count: numbers.length, sum, evenCount, max, category };
}

// Тести
console.log(summarizeNumbers([4, 7, 2, 9]));
console.log(summarizeNumbers([]));
console.log(summarizeNumbers([-5, -3, -1]));