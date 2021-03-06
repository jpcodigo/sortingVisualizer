import * as model from "./model";
import * as view from "./view";

const genBtn = document.getElementById("generate");
const mergeBtn = document.getElementById("merge");
const quickBtn = document.getElementById("quick");
const heapBtn = document.getElementById("heap");
const bubbleBtn = document.getElementById("bubble");

genBtn.addEventListener("click", resetRender);

mergeBtn.addEventListener("click", () => {
  const { array } = model.state.array;
  const animations = model.getMergeSortAnimations(array);
  view.mergeSort(animations);
});

quickBtn.addEventListener("click", () => {
  const { array } = model.state.array;
  const animations = model.getQuickSortAnimations(array);
  view.quickSort(animations);
});

heapBtn.addEventListener("click", () => {
  const { array } = model.state.array;
  const animations = model.getHeapSortAnimations(array);
  view.heapSort(animations);
});

bubbleBtn.addEventListener("click", () => {
  const { array } = model.state.array;
  const animations = model.getBubbleSortAnimations(array);
  view.bubbleSort(animations);
});

function appLoaded() {
  model.resetArray();
  const { array } = model.state.array;
  view.render(array);
}

function resetRender() {
  model.resetArray();
  const { array } = model.state.array;
  view.render(array);
}

appLoaded();
window.onresize = resetRender;
