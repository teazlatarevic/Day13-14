// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var content = document.getElementById("content");

// When the user clicks the button, open the modal 
//btn.onclick = function() {
  //modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //modal.style.display = "none";
///}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //if (event.target == modal) {
    //modal.style.display = "none";
  //}
//}

function openModal(obj) {
  //modal.style.display = "block";
  //u skladu s ovim obj.innerHTMLom otvori modal koji trebas
  switch(obj.innerHTML) {
    case "Marathon": 
      document.getElementById("marathonModal").style.display = "block";
      break
    case "Gymnastics":
      document.getElementById("gymnasticModal").style.display = "block";
      break;
  }
}

function hideModal(obj) {
  obj.parentNode.parentNode.style.display = "none";
}

function imageHover(obj) {
  obj.style.filter = "brightness(50%)";
}

function imageOut(obj) {
  obj.style.filter = "brightness(100%)";
}