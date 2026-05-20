const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "transparent";
  });
});

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  document.querySelector(".container").appendChild(div);
}

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "black";
  });
});
