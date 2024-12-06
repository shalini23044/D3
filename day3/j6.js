function findNumbers() {
    let result = [];
    let count = { multiplesOf2: 0, multiplesOf5: 0, multiplesOf7: 0, multiplesOf10: 0 };
  
    for (let i = 1; i <= 100; i++) {
      if (count.multiplesOf2 < 5 && i % 2 === 0) {
        result.push(i);
        count.multiplesOf2++;
      } else if (count.multiplesOf5 < 5 && i % 5 === 0) {
        result.push(i);
        count.multiplesOf5++;
      } else if (count.multiplesOf7 < 5 && i % 7 === 0) {
        result.push(i);
        count.multiplesOf7++;
      } else if (count.multiplesOf10 < 5 && i % 10 === 0) {
        result.push(i);
        count.multiplesOf10++;
      }
  
      if (result.length === 20) {
        break;
      }
    }
  
    return result;
  }
  
  const numbers = findNumbers();
  console.log(numbers);
  