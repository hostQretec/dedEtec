const splash = document.querySelector(".splash");

document.querySelector("#mybtn").addEventListener("click", (e) => {
  console.log("Funcionando");
  splash.classList.add("display-none");
});
document.querySelector("#mybtn").onclick = function () {
  console.log("works!");
  //$(".plus").click(function(){
    //$(this).toggleClass("minus")  ; 
   //})  
  setTimeout("location.href = 'mainwc.html';", 6500);
};


//$( element ).click(function() {
//$( "#sumir" ).fadeOut( "slow", function() {
//splash.classList.add("display-none");
// Animation complete.
// });
//});
//document.getElementById("mybtn").onclick = function () {
//location.href = "dedEtecloading.gif";
//};
