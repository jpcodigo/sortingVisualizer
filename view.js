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
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const [idx, second] = animations[i];

    if (second === "pivot") {
      const pivotStyle = arrayBars[idx].style;
      setTimeout(() => {
        for (const bar of arrayBars)
          bar.style.backgroundImage = "linear-gradient(blue, black)";
        pivotStyle.backgroundImage = "linear-gradient(purple, purple)";
      }, i * animationSpeed);
    } else if (second === "adv") {
      const advStyle = arrayBars[idx].style;
      setTimeout(() => {
        if (idx > 0) {
          const prevStyle = arrayBars[idx - 1].style;
          if (prevStyle.backgroundImage === "linear-gradient(lime, lime)")
            prevStyle.backgroundImage = "linear-gradient(blue, black)";
        }
        advStyle.backgroundImage = "linear-gradient(lime, lime)";
      }, i * animationSpeed);
    } else if (second === "swap") {
      const adv = animations[i - 1][0];
      if (idx === adv) {
        const waitStyle = arrayBars[idx].style;
        setTimeout(() => {
          waitStyle.backgroundImage = "linear-gradient(red, red)";
        }, i * animationSpeed);
      } else {
        const temp = arrayBars[idx].outerHTML;

        setTimeout(() => {
          arrayBars[idx].outerHTML = arrayBars[adv].outerHTML;
          arrayBars[adv].outerHTML = temp;
          arrayBars[adv].style.backgroundImage = "linear-gradient(lime, lime)";
          if (idx + 1 !== adv)
            arrayBars[idx + 1].style.backgroundImage =
              "linear-gradient(red, red)";
        }, i * animationSpeed);
      }
    } else {
      const temp = arrayBars[idx].outerHTML;

      setTimeout(() => {
        arrayBars[idx].outerHTML = arrayBars[second].outerHTML;
        arrayBars[second].outerHTML = temp;
        arrayBars[second].style.backgroundImage = "linear-gradient(lime, lime)";
        if (idx + 1 !== second)
          arrayBars[idx + 1].style.backgroundImage =
            "linear-gradient(red, red)";
      }, i * animationSpeed);
    }
  }
}
