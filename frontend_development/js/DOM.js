N=document.getElementById("demo").innerHTML = "Hey";
console.log(N);
// N=document.getElementById("demo").innerHTML = window.ActiveXObject + "px<br>";
// console.log(N);
N=document.getElementById("demo").innerHTML = window.location.pathname;
console.log(N);

function goBack() {
    console.log(window.history.forward());
}
console.log(N);
s=document.getElementsByTagName("h1")[0].style.fontFamily = "Verdana";
console.log(s);
document.getElementsByClassName("change")[0].innerHTML = "Good Night"
