import * as model from "./model";
import * as view from "./view";

const genBtn = document.getElementById("generate");
const mergeBtn = document.getElementById("merge");

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

function appLoaded() {
  model.resetArray();
  const { array } = model.state.array;
  view.render(array);
}

appLoaded();
model.quickSort([2, 4, 6, 8, 1, 3, 5, 7, 9]);
