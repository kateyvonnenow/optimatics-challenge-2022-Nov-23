function transform(arrOfNums) {
  var newArr = []
  
  arrOfNums.forEach(num => {
    if (num === 0) {
      newArr.push(6)
      newArr.push(8)
    } else {
      newArr.push(num - 1)
    }
  })

  return newArr
}

function makeCompactArray(arrOfNums) {
  var arrOfFishValues = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  arrOfNums.forEach(num => {
    arrOfFishValues[num] += 1
  })

  return arrOfFishValues
}

function birthingFishes(compactArray) {
  var newBornFishes = 0

  for (var j = 0; j < compactArray.length; j++) {
    if (j === 0) {
      newBornFishes = compactArray[j]
      compactArray[j] = compactArray[j+1]
    } else if (j === 6) {
      compactArray[j] = compactArray[j+1] + newBornFishes
    } else if (j === 8) {
      compactArray[j] = newBornFishes
    } else {
      compactArray[j] = compactArray[j+1]
    }
  }
  return compactArray
}

function manyDays(arrOfNums, numOfDays) {  
  var compactArray = makeCompactArray(arrOfNums)
  
  for (var i = numOfDays; i > 0; i--) {
    compactArray = birthingFishes(compactArray)
  }

  var numOfFishes = compactArray.reduce((total, num) => {
    return total + num
  }, 0)

  return numOfFishes
}

console.log(manyDays([1,3,1,5,5,1,1,1,5,1,1,1,3,1,1,4,3,1,1,2,2,4,2,1,3,3,2,4,4,4,1,3,1,1,4,3,1,5,5,1,1,3,4,2,1,5,3,4,5,5,2,5,5,1,5,5,2,1,5,1,1,2,1,1,1,4,4,1,3,3,1,5,4,4,3,4,3,3,1,1,3,4,1,5,5,2,5,2,2,4,1,2,5,2,1,2,5,4,1,1,1,1,1,4,1,1,3,1,5,2,5,1,3,1,5,3,3,2,2,1,5,1,1,1,2,1,1,2,1,1,2,1,5,3,5,2,5,2,2,2,1,1,1,5,5,2,2,1,1,3,4,1,1,3,1,3,5,1,4,1,4,1,3,1,4,1,1,1,1,2,1,4,5,4,5,5,2,1,3,1,4,2,5,1,1,3,5,2,1,2,2,5,1,2,2,4,5,2,1,1,1,1,2,2,3,1,5,5,5,3,2,4,2,4,1,5,3,1,4,4,2,4,2,2,4,4,4,4,1,3,4,3,2,1,3,5,3,1,5,5,4,1,5,1,2,4,2,5,4,1,3,3,1,4,1,3,3,3,1,3,1,1,1,1,4,1,2,3,1,3,3,5,2,3,1,1,1,5,5,4,1,2,3,1,3,1,1,4,1,3,2,2,1,1,1,3,4,3,1,3], 256))

module.exports = transform