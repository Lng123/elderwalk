var senior = new Image();
var youngPerson = new Image();

window.onload = function simulate() {
  
  console.log("does it start?");
  senior.src = '/Users/user/elderWalk/elderwalk/images/senior.png';
  youngPerson.src = '/Users/user/elderWalk/elderwalk/images/youngPerson.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.clearRect(0, 0, 300, 300); // clear canvas



  //old person
  ctx.drawImage(senior, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);

}

simulate();




