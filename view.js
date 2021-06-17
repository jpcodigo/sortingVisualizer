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
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];

    if (isColorChange) {
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

export function heapSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];

    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient =
        i % 3 === 0
          ? "linear-gradient(black, lime)"
          : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * (animationSpeed / 2));
    } else {
      setTimeout(() => {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");

        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * (animationSpeed / 2));
    }
  }
}

export function bubbleSort(animations) {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    const [barOneIdx, barTwoIdx] = animations[i];

    if (isColorChange) {
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const gradient =
        i % 3 === 0
          ? "linear-gradient(black, lime)"
          : "linear-gradient(blue, black)";
      setTimeout(() => {
        barOneStyle.backgroundImage = gradient;
        barTwoStyle.backgroundImage = gradient;
      }, i * (animationSpeed / 5));
    } else {
      setTimeout(() => {
        const barOne = arrayBars[barOneIdx];
        const barTwo = arrayBars[barTwoIdx];
        const temp = document.createElement("div");

        barOne.parentNode.insertBefore(temp, barOne);
        barTwo.parentNode.insertBefore(barOne, barTwo);
        temp.parentNode.insertBefore(barTwo, temp);
        temp.parentNode.removeChild(temp);
      }, i * (animationSpeed / 5));
    }
  }
}
