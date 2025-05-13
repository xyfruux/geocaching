arrowDir = null;
score = 0;

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
    score++;
    setArrowDir();
    console.log(arrowDir, score);
  } else {
    console.log("Wrong key pressed!");
    score = 0;
    setArrowDir();
    console.log(arrowDir, score);
  }
});
