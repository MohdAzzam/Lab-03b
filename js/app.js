
var userName = prompt("Tell Us Your Name");

if (userName != null) {
  alert("Welcome " + userName);
} else {
  alert("Welcome user");
}
document.write('<h1>'+ 'Welcome '+userName+'</h1>'+'<br>');
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


function CatCount(){
  var count =prompt('How Many Cat Do You have');
  if(isNaN(count)){
     CatCount()
  } else {
    var i=1;
    while(count!=0){
      document.write('<h1>'+i+'</h1>');
      i++;
      document.write('<img style="width:250px;height:250px" src="https://mohdazzam.github.io/Lab-03b/img/cat.jpg" />'+'<br>');
      count--;
      
    }
  }
}