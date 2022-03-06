const splash = document.querySelector(".splash");

document.querySelector("#mybtn").addEventListener("click", (e) => {
  console.log("Funcionando");
  splash.classList.add("display-none");
});
document.querySelector("#mybtn").onclick = function () {
  setTimeout("location.href = 'mainwc.html';", 6500);
};
