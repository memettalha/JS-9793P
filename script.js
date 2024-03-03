
count=0;

document.getElementById("increaseBtn").onclick =function(){
    count+=1;
    document.getElementById("number").innerHTML = count;
}


//Müzik açma
let audio = document.getElementById("music");
let playBtn = document.getElementById("playBtn");
let isPlaying = false;

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  isPlaying = !isPlaying;
});
//
let Play = true;




