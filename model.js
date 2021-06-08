export const state = {
  array: [],
};
let viewportWidth = document.documentElement.clientWidth;
// viewport change event or media queries?
export function resetArray() {
  const array = [];
  const barCount = viewportWidth / 5.5;
  for (let i = 0; i < barCount; i++) {
    array.push(randomIntFromInterval(5, 750));
  }
  state.array = { array };
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ALGORITHMS

// MERGE SORT

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// QUICK SORT

export function getQuickSortAnimations(arr) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(arr);
  return animations;
}

function quickSort(arr) {
  let stack = [];
  let start = 0;
  let end = arr.length - 1;

  stack.push({ x: start, y: end });

  while (stack.length) {
    const { x, y } = stack.shift();
    animations.push([x, y, "check"]);
    const pivotIdx = partitionHigh(arr, x, y);
    if (pivotIdx - 1 > x) {
      stack.push({ x: x, y: pivotIdx - 1 });
    }
    if (pivotIdx + 1 < y) {
      stack.push({ x: pivotIdx + 1, y: y });
    }
    console.log(arr);
  }
  console.log(arr);
}

function partitionHigh(arr, low, high) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      animations.push([i, j, "swap"]);
      i++;
    } else {
      animations.push([j + 1]);
    }
  }
  animations.push([i, high, "swap"]);
  return i;
}
