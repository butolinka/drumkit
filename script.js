
function playSound(e){
    
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio)return; //stop the funktion from running
        audio.currentTime=0;
        audio.play();
        key.classList.add('playing'); //adding a clss to style the pushed key
        };


function removeTransition(e){
    if (e.propertyName!=='transform')return; //skip ir if it is not a transform
    this.classList.remove('playing'); //removing class after key was pushed
}
const keys = document.querySelectorAll('.key');
keys.forEach(key=> key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);