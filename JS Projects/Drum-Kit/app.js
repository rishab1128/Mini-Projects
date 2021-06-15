const audios=document.getElementsByTagName('audio');
//console.log(audios[0].dataset.key);

document.body.addEventListener('keydown',runEvent);

function runEvent(e){
    console.log(e.keyCode);

    //Method-1
    /*for(let i=0; i<audios.length; i++)
    {
        if(e.keyCode==audios[i].dataset.key)
        {
            console.log(audios[i]);
            audios[i].play();
            break;
        }
    }*/

    //Method-2 --> Without using loop
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`); //Selecting the audio element which matches with the corresponding keyCode

    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);//Selecting the actual element with class=key which matches with the corresponding keyCode for adding the button animations


    console.log(audio);
    console.log(key);
    console.log(key.classList);

    //For adding animation -> class='playing gets added in the div(->classList) of that corresponding element when we press the key
    key.classList.add('playing');


    if(!audio)
        return ; //stops the func from running all together
    audio.currentTime=0; //rewind to the start
    audio.play();

}

//For removing the transition that gets added in the button when we press the key
const keys=document.querySelectorAll('.key'); //returns a Node List
console.log(keys);

keys.forEach((key)=>{
    key.addEventListener('transitionend',removeTransition);
})

function removeTransition(e){
    console.log(e); //On console window we see 6 event objects (TransitionEvents) because of the color-change of the 4-borders of the button + 1 because of box-shadow + 1 because of transform

    e.target.classList.remove('playing');

    //Aternative way for  : e.target.classList.remove('playing'); is
    //console.log(this);
    //this.classList.remove('playing');  //Since key is calling the addEventListener func , therfore this =  key
}