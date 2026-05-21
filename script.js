const clearButton = document.getElementById("clear-button");
const blocksButton = document.getElementById("blocks-button");

blocksButton.addEventListener("click", () => {
  const newSize = prompt("Enter the number of blocks per side (max 64):");
  const size = Math.min(Math.max(parseInt(newSize), 1), 64);
  console.log(size);

  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
});

clearButton.addEventListener("click", () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "transparent";
  });
});


