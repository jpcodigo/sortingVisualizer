const container = document.getElementById("array-container");
const animationSpeed = 5;

export function render(array) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  array.map((value) => {
    let i = 1;
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="array-bar" style="height: ${value / 10}rem;"></div>`
    );
    i++;
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
  let i = 0;
  const arrayBars = document.getElementsByClassName("array-bar");

  while (animations.length > 0) {
    if (!Array.isArray(animations[0])) {
      const pivotIdx = animations.shift();
      const pivotStyle = arrayBars[pivotIdx].style;

      setTimeout(() => {
        for (const bar of arrayBars) {
          bar.style.backgroundImage = "linear-gradient(blue, black)";
          bar.style.width = ".4rem";
        }
        pivotStyle.backgroundImage = "linear-gradient(white, white)";
        pivotStyle.width = ".8rem";
      }, i * animationSpeed);
    } else {
      const [left, right] = animations.shift();
      setTimeout(() => {
        const higher = arrayBars[left];
        const lower = arrayBars[right];
        higher.style.backgroundImage = "linear-gradient(lime, lime)";
        lower.style.backgroundImage = "linear-gradient(red, red)";
        const temp = document.createElement("div");
        lower.parentNode.insertBefore(temp, lower);
        higher.parentNode.insertBefore(lower, higher);
        temp.parentNode.insertBefore(higher, temp);
        temp.parentNode.removeChild(temp);
      }, i * animationSpeed);
    }
    i++;
  }
  setTimeout(() => {
    for (const bar of arrayBars) {
      bar.style.backgroundImage = "linear-gradient(blue, black)";
      bar.style.width = ".4rem";
    }
  }, i * animationSpeed);
}

export function heapSort(animations) {
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
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");
        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * animationSpeed);
    }
  }
}
