
const notes = ["week1.html","week2.html","week3.html","week4.html",
"week5.html","week6.html","week7.html","week8.html","week9.html",
"week10.html","week11.html","week12.html","week13.html","week14.html, todo.html"]; 
var result = ""
for (var i = 0; i < notes.length; i++) {
    result = result + " <a href='" + notes[i] + "'>"+ notes[i] + "</a>";
}
document.getElementById('week').innerHTML = result
function myFunction(value, index, array) {
    txt += value + "<br>"; 
  }
  