document.addEventListener("DOMContentLoaded", function () {
  //console.log('загрузилось');
  var carOne=document.getElementById("car_1");
  var carTwo=document.getElementById("car_2");
  var zagadka=document.querySelectorAll("zagad")[0];
  var enter=document.getElementById("enter");
  var posCarTwo=20;
  var answer=document.getElementById("answer");
  //console.log(answer);



function animate(draw, duration) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // определить, сколько прошло времени с начала анимации
    var timePassed = time - start;

    // возможно небольшое превышение времени, в этом случае зафиксировать конец
   // if (timePassed > duration) timePassed = duration;

    // нарисовать состояние анимации в момент timePassed
    draw(timePassed);

    // если время анимации не закончилось - запланировать ещё кадр
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }

  });
}

animate(function(timePassed) {
  carOne.style.left = timePassed / 20 + 'px';
}, 23000);
    

enter.addEventListener("click", function(){
	if(answer==4){
		carOne.style.left = posCarTwo + 'px';
	}
	
})

let context = new AudioContext();

fetch('sounds/music.mp3').then(response => {
  response.arrayBuffer().then(arrayBuffer => {
    context.decodeAudioData(arrayBuffer, buffer => {
      let source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(0);
    });
  });
});
});