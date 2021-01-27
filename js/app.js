
var userName = prompt("Tell Us Your Name");

if (userName != null) {
  alert("Welcome " + userName);
} else {
  alert("Welcome user");
}

function myFunction() {
  var s = confirm("Confirm it");
  if (s == true) {
    document.write(
      '<h4 style="color:blue;">' +
        "You Confirm the request " +
        userName +
        " !!" +
        "</h4>" +
        "<br>" +
        '<a href="index.html">' +
        "Back" +
        "</a>"
    );
  } else {
    document.write(
      '<h4 style="color:red;">' +
        "You Decline the request " +
        userName +
        " !!" +
        "</h4>" +
        "<br>" +
        '<a href="index.html">' +
        "Back" +
        "</a>"
    );
  }
}

function Age() {
  var age = prompt("Your Age");
if (isNaN(age) || age <= 0 || age > 100){
    alert('please enter a valid number')
    Age()
}else{
    if (age < 18) {
      alert("Hello Teenger");
    } else {
      alert("Hello Adults");
    }
}
}
function changeColor(){
    var articleColor=prompt('in Which Color you want to see the Article');
    document.getElementById("article").style.color = articleColor;

}
