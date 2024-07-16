function findMax(arr) {
    if (arr.length === 0) {
      return null;
    }
    return Math.max(...arr);
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let maxNumber = findMax(numbers);
  console.log(maxNumber);
  let emptyArray = [];
  let maxNumberEmpty = findMax(emptyArray);
  console.log(maxNumberEmpty);
  