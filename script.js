const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }
  console.log(load);
  loadText.innerText = `${load}`;

  //transition from an opacity of 1 (fully opaque) to an opacity of 0 (fully transparent)
  //in tandem with the transition of load from 0 to 100
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, range1Start, range1End, range2Start, range2End) => {
  //console.log(range1End, range1Start, range2End, range2Start);
  //   console.log(
  //     ((num - range1Start) * (range2End - range2Start)) /
  //       (range1End - range1Start) +
  //       range2Start
  //   );
  return (
    ((num - range1Start) * (range2End - range2Start)) /
      (range1End - range1Start) +
    range2Start
  );
};
