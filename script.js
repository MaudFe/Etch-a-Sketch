const grid = document.querySelector(".drawing-grid");
const userInput = document.querySelector(".button");
let userPrompt;

window.onload = check;
function check() {
  document.querySelector("#black").checked = true;
}

document.querySelector(".button").addEventListener("click", () => {
  do {
    userPrompt = prompt("Please provide a number between 0 and 100");
  } while (isNaN(userPrompt) || userPrompt < 0 || userPrompt > 100);
  userPrompt = Number(userPrompt);
  updateGrid(userPrompt);
});


document.querySelector('.clear').addEventListener('click', () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach(
    square => square.style.backgroundColor = ""
  );
})


document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});


createSquares = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  hoverColor();
};

updateGrid = (userPrompt) => {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-rows", `repeat(${userPrompt}, 1fr)`);
  grid.style.setProperty("grid-template-columns", `repeat(${userPrompt}, 1fr)`);
  for (let i = 0; i < userPrompt * userPrompt; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  hoverColor();
};

getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

hoverColor = () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (document.getElementById("black").checked == true) {
        item.style.backgroundColor = "black";
      } else if (document.getElementById("eraser").checked == true) {
        item.style.backgroundColor = "white";
      } else if (document.getElementById("rgb").checked == true) {
        item.style.backgroundColor = `${getRandomColor()}`;
      }
    });
  });
};



createSquares();
