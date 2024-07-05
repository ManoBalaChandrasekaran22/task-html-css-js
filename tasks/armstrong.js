//armstrong//
function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    let digits = n.toString().split("").length;
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, digits);
      temp = Math.floor(temp / 10);
    }
    return sum === n;
  }
  // Test the function
  console.log(isArmstrong(371));
  console.log(isArmstrong(123)); 
  console.log(isArmstrong(153)); 
  console.log(isArmstrong(407)); 