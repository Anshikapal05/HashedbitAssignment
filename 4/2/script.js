// Write your code here
function createDiv(width, height, text) {
  const container = document.getElementById("container");

  const newDiv = document.createElement("div");
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";
  newDiv.textContent = text;

  // Optional styling so divs are visible
  newDiv.style.border = "1px solid black";
  newDiv.style.margin = "10px";
  newDiv.style.padding = "10px";
  newDiv.style.backgroundColor = "yellow"

  container.appendChild(newDiv);
}


createDiv(200, 100, "1st div");
createDiv(200, 100, "2nd div");
createDiv(200, 100, "3rd div");


window.createDiv = createDiv;
