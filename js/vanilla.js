document.getElementById("fname").addEventListener("keydown", myFunction);

function myFunction() {
 
    var x = document.getElementById("fname");
    var a = document.getElementById("change");
    a.innerHTML = "Heyyyy";
    x.value = x.value.toUpperCase();
}
