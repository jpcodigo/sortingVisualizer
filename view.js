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
    console.log(animations[i]);
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx] = animations[i];

      const barOneStyle = arrayBars[barOneIdx].style;
      const gradient =
        i % 3 === 0
          ? "linear-gradient(black, lime)"
          : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
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
  for (const animation of animations) {
    const arrayBars = document.getElementsByClassName("array-bar");

    if (animation[2] === "check") {
      const start = animation[0];
      const pivot = animation[1];
      arrayBars[start - 1].style = "linear-gradient(black, blue)";
      arrayBars[start].style = "linear-gradient(black, lime)";
      arrayBars[pivot].style = "linear-gradient(black, purple)";
    } else if (animation[2] === "swap") {
      const left = animation[0];
      const right = animation[1];
      const temp = arrayBars[left];
      arrayBars[left] = arrayBars[right];
      arrayBars[right] = temp;
    }
  }
}
