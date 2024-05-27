let background = prompt("Orqa fonni kiriting: ");
let text = prompt("Textni rangini kiriting: ")

let body = document.querySelector("body");
let p = document.querySelector("p")

body.style = `background-color: ${background};`;
p.style = `color: ${text};`;