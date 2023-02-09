function Lesson() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      xhttp.responseText;
    }
    xhttp.open("GET", "./html/Lesson.html");
    xhttp.send();
  }
function news() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      xhttp.responseText;
    }
    xhttp.open("GET", "./html/news.html");
    xhttp.send();
  }
  
var point = false;
function check(){
  point = !point;
  if(point == true)
  {
    var dark = window.document.getElementById("dark");
    var x = dark.style.backgroundColor="orange";
    return x;
  }
  else if(point==false){
    var dark = window.document.getElementById("dark");
    var x = dark.style.backgroundColor="#003366";
    return x;
  }
}




