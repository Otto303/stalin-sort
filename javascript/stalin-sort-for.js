function stalinSort(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an Array!');
  }
  
  if (array.length <= 1) {
    return array;
  }
  
  let writeIndex = 1;
  let lastValid = array[0];
  
  for (let readIndex = 1; readIndex < array.length; readIndex++) {
    if (array[readIndex] >= lastValid) {
      array[writeIndex] = array[readIndex];
      lastValid = array[readIndex];
      writeIndex++;
    }
  }
  
  array.length = writeIndex;
  return array;
}

module.exports = stalinSort
