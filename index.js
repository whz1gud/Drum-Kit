document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    // buttonAnimation(event.key);
});

for (var i in document.querySelectorAll(".drum")){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var innerHTML = this.innerHTML;
        makeSound(innerHTML);
        // buttonAnimation(innerHTML);
    });
}

function makeSound(key) {

    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(innerHTML)
            break;
    }
}

function buttonAnimation(key) {
    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");
}