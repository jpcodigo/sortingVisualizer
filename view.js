const container = document.getElementById("array-container");
const animationSpeed = 1.5;

export function render(array) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  array.map((value) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="array-bar" style="height: ${value / 10}rem"></div>`
    );
  });
}

// ALGORITHMS

export function mergeSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];

      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient =
        i % 3 === 0
          ? "linear-gradient(black, lime)"
          : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight / 10}rem`;
      }, i * animationSpeed);
    }
  }
}

export function quickSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const [idx, second] = animations[i];

    if (second === "pivot") {
      for (let p = 0; p < arrayBars.length; p++) {
        arrayBars[p].style.backgroundImage = "linear-gradient(blue, black)";
      }

      const pivotStyle = arrayBars[idx].style;
      setTimeout(() => {
        pivotStyle.backgroundImage = "linear-gradient(purple, purple)";
      }, i * animationSpeed);
    }
  }
}
