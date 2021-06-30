const musicContainer=document.querySelector('.music-container');
const playBtn=document.querySelector('#play');
const prevBtn=document.querySelector('#prev');
const nextBtn=document.querySelector('#next');
const audio=document.querySelector('#audio');
const progress=document.querySelector('.progress');
const progressContainer=document.querySelector('.progress-container');
const title=document.querySelector('#title');
const cover=document.querySelector('#cover');


//Song titles
const songs=['hey','summer','ukulele'];


//Keep track of songs
let songIndex=2;


//Initially load song into DOM
loadSong(songs[songIndex]);


//Update song details
function loadSong(song){
    title.innerText=song;
    audio.src=`music/${song}.mp3`;
    cover.src=`images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    musicContainer.classList.remove('play');
    audio.pause();
}

function prevSong(){
    songIndex--;

    if(songIndex<0)
        songIndex=songs.length-1;

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;

    if(songIndex>=songs.length)
        songIndex=0;

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e){
    //console.log(e.srcElement.duration);
    //console.log(e.srcElement.currentTime);
    const {duration, currentTime}=e.srcElement;
    const progressPercent=(currentTime/duration)*100;
    progress.style.width=`${progressPercent}%`;
}

function setProgress(e){
    const width=this.clientWidth;
    //console.log(width);
    const clickX=e.offsetX;
    //console.log(clickX);
    const duration=audio.duration;
    audio.currentTime=(clickX/width)*duration
}


//Event listeners
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

//Change song events
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

//Progress bar
audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click',setProgress);

audio.addEventListener('ended',nextSong);