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
      case "Climbing":
      document.getElementById("climbingModal").style.display = "block";
      break;
      case "Skiing":
      document.getElementById("skiingModal").style.display = "block";
      break;
      case "Weight Lifting":
      document.getElementById("weightLiftingModal").style.display = "block";
      break;
      case "Basketball":
      document.getElementById("basketballModal").style.display = "block";
      break;
      case "Swimming":
      document.getElementById("swimmingModal").style.display = "block";
      break;
      case "Jogging":
      document.getElementById("joggingModal").style.display = "block";
      break;
      case "Running":
      document.getElementById("runningModal").style.display = "block";
      break;
      case "Cycling":
      document.getElementById("cyclingModal").style.display = "block";
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