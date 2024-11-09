console.log("IMMA BOMB YOU");
console.warn("you abouta be bombed");
console.error("error msg");

alert("this is an alert u abouta be bombed");
let is0k = confirm("boy you abouta be bombed,y/n cap/slap");
console.log("user is abouta be bombed:" + is0k);

function onTimeout() {
  console.log("This happens after 1 sec");
}
setTimeout(onTimeout, 1000);

let countDown = 10;
function onInvterval() {
  countDown -= 1;
  console.log("time" + countDown);
  if (countDown == 0) {
    console.log("BOOOOM");
    window.open("https://www.youtube.com");
  }
}
setInterval(onInvterval, 1000);

let btn1 = document.getElementById("btn1");
let clickCount = 0;
function onBtnclicked() {
  clickCount += 1;
  alert("hey ya clicked, ya skibidi~");
  btn1.textContent = "YOu clicked~" + clickCount + "~times.";
}
btn1.addEventListener("click", onBtnclicked);
