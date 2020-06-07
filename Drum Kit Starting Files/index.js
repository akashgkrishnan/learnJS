var numOfDrums = document.querySelectorAll('.drum').length;
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    buttonInnerHtml = this.innerHTML
    makesound(buttonInnerHtml);
    buttonColor(buttonInnerHtml);

  });
}

document.addEventListener('keydown', function(event){
  makesound(event.key);
  buttonColor(event.key);
});




function makesound(key){

  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3')
      crash.play();
      break;

    case 'a':
      var kick = new Audio('sounds/kick-bass.mp3')
      kick.play();
      break;

    case 's':
      var snare = new Audio('sounds/snare.mp3')
      snare.play();
      break;

    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
      break;

    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
      break;

    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
      break;

    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
      break;

    default:
    console.log('default');

  }
}


function buttonColor(key){

 var animated_button = document.querySelector("." + key);
 animated_button.classList.add('pressed');

 setTimeout(function (){
   animated_button.classList.remove("pressed");

 }, 100);

}



function BellBoy(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex

  this.clean = function(){
    console.log('clean in progress');
  }

}

boy = new BellBoy('Akash', 12, 'MALE');


console.log(boy);

console.log(boy.clean());
