export const state = {
  array: [],
};

export function resetArray() {
  const array = [];
  const viewportWidth = document.documentElement.clientWidth;
  const barCount = viewportWidth / 7.5;

  for (let i = 0; i < barCount; i++) {
    array.push(randomIntFromInterval(5, 750));
  }
  state.array = { array };
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/****************************************************
 *** ALGORITHMS
 ****************************************************/

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
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      animations.push([i, j, pivotIdx]);
      animations.push([i, j, pivotIdx]);
      animations.push([i, j, pivotIdx]);
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

// HEAP SORT

export function getHeapSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  heapSort(arr, animations);
  return animations;
}

export function heapSort(arr, animations) {
  const n = arr.length;

  for (let i = n / 2 - 1; i >= 0; i--) heapify(animations, arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, i]);
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(animations, arr, i, 0);
  }
}

function heapify(animations, arr, n, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([i, largest]);
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(animations, arr, n, largest);
  }
}
