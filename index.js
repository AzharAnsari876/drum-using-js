let jungle = document.querySelectorAll(".jungle");
let jungleLength = document.querySelectorAll(".jungle").length;

for (let i = 0; i < jungleLength; i++) {
  jungle[i].addEventListener("click", () => {
    let jungleInnerHtml = jungle[i].innerHTML;
    PlayJungle(jungleInnerHtml);
    buttonAnimation(jungleInnerHtml);
  });
}

document.addEventListener("keypress", function (e) {
  console.log(e.key);
  PlayJungle(e.key);
  buttonAnimation(e.key);
});

function PlayJungle(key) {
  switch (key) {
    case "m":
      let m = new Audio('sounds/monkey.mp3');
      m.play();
      break;
    case "l":
      let l = new Audio('sounds/lion.mp3');
      l.play();
      break;
    case "w":
      let w = new Audio('sounds/wolf.mp3');
      w.play();
      break;
    case "e":
      let e = new Audio('sounds/elephant.mp3');
      e.play();
      break;
    case "b":
      let b = new Audio('sounds/bear.mp3');
      b.play();
      break;
    default:
      console.log("No Button Pressed");
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.toggle("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
