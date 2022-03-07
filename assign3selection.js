function selectionSort(arr, i) {
    if (i === 0) {
      return arr;
    }
    const min = Math.min(...arr.filter((x, j) => j < i));
    const index = arr.findIndex(x => x === min);
    arr.splice(index, 1);
    arr.push(min);
    return selectionSort(arr, --i);
  }
  
  const unsortedArr = [10, 22, 67, 75, 80, 66];
  console.log('result', selectionSort(unsortedArr , unsortedArr.length))