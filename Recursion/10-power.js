/*
Write a function called power which accpets a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
*/

/*
Examples
power(2, 0) //1
power(2, 2) //4
power(2, 4) //16
*/

//MySolution
function power(base, exp){
  if(exp === 0){
    return 1;
  }

  if(exp === 1){
    return base;
  }
  return base * power(base, exp - 1);
}

//Udemy solution
function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}