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

test('transform [8] to [7]', function () {
  expect(transform([8])).toEqual([7])
})

test('transform [8, 3] to [7, 2]', function () {
  expect(transform([8, 3])).toEqual([7, 2])
})

test('transform [0] to [6, 8]', function () {
  expect(transform([0])).toEqual([6, 8])
})

test('get compact array from a big dataset', function () {
  expect(makeCompactArray([3, 4, 3, 1, 2])).toEqual([0, 1, 1, 2, 1, 0, 0, 0, 0])
})

test('birth new fish when timer reaches 0', function () {
  expect(birthingFishes([1, 1, 2, 1, 0, 0, 0, 0, 0])).toEqual([1, 2, 1, 0, 0, 0, 1, 0, 1])
})

test('Pass 2 arguments into the "manyDays" function. 1st argument is the array of fish timer and the 2nd argument is the integer of 18 days passed. Output an integer of total 26 fishes', function () {
  expect(manyDays([3, 4, 3, 1, 2], 18)).toEqual(26)
})

test('Pass 2 arguments into the "manyDays" function. 1st argument is the array of fish timer and the 2nd argument is the integer of 80 days passed. Output an integer of total 5934 fishes', function () {
  expect(manyDays([3, 4, 3, 1, 2], 80)).toEqual(5934)
})


test('Pass 2 arguments into the "transform" function. 1st argument is the array of fish timespan and the 2nd argument is the integer of 256 days passed and get output a number of 26984457539 fishes', function () {
  expect(manyDays([3,4,3,1,2], 256)).toEqual(26984457539)
})

