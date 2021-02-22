const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
function finalPosition(moves){
  let x = 0
  let y = 0
  let position = []
  for(const move of moves){
    if(move === 'north'){
      y++
    }
    else if(move === 'south'){
      y--
    }
    else if(move === 'east'){
      x++
    }
    else{
      x--
    }


  }
  position.push(x)
  position.push(y)
  return position
}
console.log(finalPosition(moves))