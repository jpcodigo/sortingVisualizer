import * as model from "./model";
import * as view from "./view";

const genBtn = document.getElementById("generate");
const mergeBtn = document.getElementById("merge");
const quickBtn = document.getElementById("quick");

genBtn.addEventListener("click", () => {
  model.resetArray();
  const { array } = model.state.array;
  view.render(array);
});
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

function appLoaded() {
  model.resetArray();
  const { array } = model.state.array;
  view.render(array);
}

appLoaded();
