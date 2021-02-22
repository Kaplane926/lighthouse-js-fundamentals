function howManyHundreds(num){
  if(num % 100 === 0){
    return num / 100
  }
  else{
    return Math.floor(num / 100)
  }
}
console.log(howManyHundreds(57777))