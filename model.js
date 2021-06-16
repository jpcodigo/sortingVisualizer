export const state = {
  array: [],
};
let viewportWidth = document.documentElement.clientWidth;
// viewport change event or media queries? viewportWidth / 5.5
export function resetArray() {
  const array = [];
  const barCount = viewportWidth / 7.5;
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
  if (arr.length <= 1) return arr;
  quickSort(arr, animations);
  return animations;
}

function quickSort(arr, animations, start = 0, end = arr.length - 1) {
  let idx;
  if (arr.length > 1) {
    idx = partition(arr, animations, start, end);
    if (start < idx - 1) {
      quickSort(arr, animations, start, idx - 1);
    }
    if (idx < end) {
      quickSort(arr, animations, idx, end);
    }
  }
}

function partition(arr, animations, start, end) {
  let pivotIdx = Math.floor((start + end) / 2);
  let pivot = arr[pivotIdx];
  let i = start;
  let j = end;
  animations.push(pivotIdx);
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      animations.push([i, j]);
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
