 {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = [];
  
    for (let i = 0; i < alphabets.length; i++) {
      if (i % 2 !== 0) { 
        result.push(alphabets[i]);
      }
    }
  
    console.log(result);
  }
  

  