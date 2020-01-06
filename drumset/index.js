const KEYS = Array.from(document.querySelectorAll('.key'));

KEYS.forEach(function(key){
    key.addEventListener("transitioned", animate)
    window.addEventListener('keydown', playsound);
    })

function animate(e){
    
}
function playsound(e){
    const AUDIO=document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!AUDIO) {
        return
    } 
    AUDIO.currentTime = 0;
    AUDIO.play();
}   