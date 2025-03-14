var buttons = document.querySelectorAll("button")


//we take the inner html of the button we click and passes to makeSound//
for (i=0; i <buttons.length ; i++){

    buttons[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    })
}


//when a key is pressed, we pass the event.key into makeSound//
document.addEventListener("keydown", function(event){
    makeSound(event.key.toLowerCase());

    buttonAnimation(event.key.toLowerCase());

})


// make sound takes an arg which we call key
//  and compares it to the stiches //
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttonInnerHTML)
    }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector(`.` + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function()
     {activeButton.classList.remove("pressed");

     }, 100);
}