function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");

  // Toggle 'day' and 'night' class on app div
  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");
  } else {
    app.classList.remove("night");
    app.classList.add("day");
  }

  // Toggle 'button_day' and 'button_night' class on button
  if (button.classList.contains("button_day")) {
    button.classList.remove("button_day");
    button.classList.add("button_night");
  } else {
    button.classList.remove("button_night");
    button.classList.add("button_day");
  }
}
