arrowDir = null;

function setArrowDir() {
  let rnd = Math.floor(Math.random() * 4);
  let dir;
  switch (rnd) {
    case 0:
      arrowDir = "ArrowUp";
      break;
    case 1:
      arrowDir = "ArrowDown";
      break;
    case 2:
      arrowDir = "ArrowLeft";
      break;
    case 3:
      arrowDir = "ArrowRight";
      break;
  }
}

setArrowDir();
console.log(arrowDir);

document.addEventListener("keydown", (event) => {
  if (event.key === arrowDir) {
    console.log("Correct key pressed!");
    setArrowDir();
    console.log(arrowDir);
  }
});
