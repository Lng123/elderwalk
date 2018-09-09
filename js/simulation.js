var senior = new Image();
var youngPerson = new Image();

function init() {
 
  senior.src = "images/senior.png";
  youngPerson.src = "images/youngPerson.png"
  window.requestAnimationFrame(draw);
}




function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas



  //old person
  ctx.drawImage(senior, 100, 50, 32, 32);
  ctx.drawImage(youngPerson, 175, 50, 32, 32);

  window.requestAnimationFrame(draw);

}

init();



