function processNumbers() {
  const results = {};

  for (let i = 1; i <= 100; i++) {
    let result = i;
    
    if (i % 2 === 0) {
      result = i * 5;
    }

    if (i % 3 === 0) {
      result = result / 3;
    }

    results[i] = result;
  }

  return results;
}

const processedNumbers = processNumbers();
console.log(processedNumbers);
