const container = document.getElementById("array-container");
const animationSpeed = 500;

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
  let initSet = [];
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const [cmd] = animations[i].slice(-1);

    if (cmd === "init") {
      const [pivotIdx, startIdx, endIdx] = animations[i];
      initSet = [];
      initSet.push(startIdx, endIdx);
      const pivotStyle = arrayBars[pivotIdx].style;
      const startStyle = arrayBars[startIdx].style;
      const endStyle = arrayBars[endIdx].style;
      setTimeout(() => {
        for (const bar of arrayBars)
          bar.style.backgroundImage = "linear-gradient(blue, black)";
        pivotStyle.style.setProperty(
          "background-image",
          "linear-gradient(purple, purple)",
          "important"
        );
        if (pivotIdx !== startIdx)
          startStyle.backgroundImage = "linear-gradient(lime, lime)";
        if (pivotIdx !== endIdx)
          endStyle.backgroundImage = "linear-gradient(lime, lime)";
      }, i * animationSpeed);
    } else if (cmd === "swap") {
      const [left, right] = animations[i];
      const [startIdx, endIdx] = initSet;
      setTimeout(() => {
        for (let i = startIdx + 1; i <= left; i++) {
          if (i !== left) {
            arrayBars[i].style.backgroundImage = "linear-gradient(lime, lime)";
            arrayBars[i - 1].style.backgroundImage =
              "linear-gradient(blue, black)";
          } else {
            arrayBars[i].style.backgroundImage = "linear-gradient(red, red)";
            arrayBars[i - 1].style.backgroundImage =
              "linear-gradient(blue, black)";
          }
        }
      }, i * animationSpeed);
      setTimeout(() => {
        for (let i = endIdx - 1; i >= right; i--) {
          if (i !== right) {
            arrayBars[i].style.backgroundImage = "linear-gradient(lime, lime)";
            arrayBars[i + 1].style.backgroundImage =
              "linear-gradient(blue, black)";
          } else {
            arrayBars[i].style.backgroundImage = "linear-gradient(red, red)";
            arrayBars[i + 1].style.backgroundImage =
              "linear-gradient(blue, black)";
          }
        }
      }, i * animationSpeed);
      setTimeout(() => {
        const temp = arrayBars[left];
        arrayBars[left].outerHTML = arrayBars[right].outerHTML;
        arrayBars[right].outerHTML = temp.outerHTML;
      }, i * animationSpeed);
    }
  }
}
