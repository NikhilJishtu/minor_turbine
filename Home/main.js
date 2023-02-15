let counter = 0;
let timer;

let playlist = [{name:"slide1", source:"slide1/index.html",time:"5"},
                {name:"slide2", source:"slide2/index.html",time:"5"},
                {name:"slide3", source:"slide3/index.html",time:"5"},
              ]

function init(){
  startTimer();
  play();
}

function play(){
  console.log(counter);
  document.getElementById("digitalsignage").src = playlist[counter].source;
  clearInterval(timer); 
  startTimer(playlist[counter].time); //restart timer

  counter++;
  counter = counter > playlist.length-1 ? 0 : counter;
  
}


function startTimer(time){
  timer = setInterval(function() {
    play();
  },time*1000);
}

init();
