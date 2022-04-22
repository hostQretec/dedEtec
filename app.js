const ld = document.querySelector(".ld");
const body = document.querySelector("body");

function redirect() {
  setTimeout("location.href = 'mainwc.html';", 8000);
  //setTimeout("")
  //const getimg = "url('../usedimages/fullloading.gif')"
  ////document.body.style.background = "";
  //document.body.style.textAlign = "center"
  ld.classList.add("hidden");
  //body.classList.add("onclick")
  console.log("uou");

  const div = document.querySelector("#add");

  const image = new Image(800, 700); // Largura (width) e altura (height).
  image.src = "./usedimages/fullloading.gif";
  console.log("aaaa");

  div.appendChild(image);
}
function CallGif() {
  let Time = setTimeout(redirect, 2000);
  console.log("oooo");
}

//TYPING TEXT ON MAINWC
new TypeIt("#WC", {
  lifeLike: false,
  speed: 0,
})
  .type("B")
  .pause(181)
  .type("e")
  .pause(80)
  .type("m")
  .pause(139)
  .type(" ")
  .pause(140)
  .type("V")
  .pause(131)
  .type("i")
  .pause(156)
  .type("n")
  .pause(115)
  .type("d")
  .pause(141)
  .type("o")
  .pause(105)
  .type("s")
  .pause(156)
  .break()
  .pause(705)
  .type("D")
  .pause(93)
  .type("E")
  .pause(269)
  .type("P")
  .pause(96)
  .type("R")
  .pause(63)
  .type("E")
  .pause(248)
  .type("S")
  .pause(176)
  .type("S")
  .pause(84)
  .type("~")
  .pause(148)
  .delete(1)
  .type("Ã")
  .pause(108)
  .type("O")
  .pause(500)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(100)
  .delete(1)
  .pause(600)
  .type("T")
  .pause(72)
  .type("E")
  .pause(168)
  .type("R")
  .pause(213)
  .type("C")
  .pause(111)
  .type("E")
  .pause(161)
  .type("I")
  .pause(234)
  .type("R")
  .pause(167)
  .type("~")
  .pause(151)
  .delete(1)
  .type("Ã")
  .pause(109)
  .type("O")
  .pause(109)
  .type("!")
  .go();
