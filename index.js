
    // Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

      // Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  
  switch (key) {
    case "a":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;
    
    case "s":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);
  // remove the pressed class after duration of .2 second

}




