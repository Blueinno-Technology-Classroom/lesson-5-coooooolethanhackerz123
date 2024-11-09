let field1 = document.getElementById("meme-input");
let btn = document.getElementById("meme-btn");
let output = document.getElementById("output-caption");

console.log(field1);
console.log(btn);
console.log(output);

function onBtnClicked() {
  output.textContent = field1.value;
}
btn.addEventListener("click", onBtnClicked);
