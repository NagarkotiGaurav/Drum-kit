var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    
    keypress(key);
    anim(key);

  });
}

document.addEventListener("keydown", function (event) {
  keypress(event.key);
  anim(event.key);
});

function keypress(love) {
    switch (love) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            
            case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

    default:
  }
}

function anim(currentkey) {
  var activekey = document.querySelector("." + currentkey);
  activekey.classList.add("pressed");

  setTimeout(function (){activekey.classList.remove("pressed")},100)
}
