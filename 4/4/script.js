const textContainer = document.getElementById("text-container");

// Change color on button click
document.getElementById("colorchange").addEventListener("click", () => {
    const color = document.getElementById("colorbox").value;
    textContainer.style.color = color;
});

// Change font size based on range input
document.getElementById("fontsize").addEventListener("input", (e) => {
    textContainer.style.fontSize = `${e.target.value}px`;
});

// Toggle Italic
document.getElementById("italic").addEventListener("click", () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle Underline
document.getElementById("underline").addEventListener("click", () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle Bold
document.getElementById("bold").addEventListener("click", () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font-family on dropdown select
document.getElementById("list").addEventListener("change", (e) => {
    textContainer.style.fontFamily = e.target.value;
});

// Get CSS properties and display
document.getElementById("getstyle").addEventListener("click", () => {
    const style = window.getComputedStyle(textContainer);
    const cssProps = [
        `color: ${style.color}`,
        `font-size: ${style.fontSize}`,
        `font-family: ${style.fontFamily.split(',')[0]}`,
        `text-decoration: ${style.textDecorationLine}`,
        `font-style: ${style.fontStyle}`,
        `font-weight: ${style.fontWeight}`
    ];
    document.getElementById("css-props").innerText = cssProps.join("; ") + ";";
});
