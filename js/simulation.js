var senior = new Image();
var youngPerson = new Image();

function init() {
 
  senior.src = "images/senior.png";
  youngPerson.src = "images/youngPerson.png"
  window.requestAnimationFrame(animate);

}


//Test


init();




var a = 20;
var b = 20;
var x = 20;
var y = 20;
var z = 20;
function animate() {
  var ctx = document.getElementById('canvas').getContext('2d');
    window.requestAnimationFrame(animate);
    
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.drawImage(youngPerson, a, 90, 32, 32);
    ctx.drawImage(youngPerson, b, 20, 32, 32);
    ctx.drawImage(senior, x, 70, 32, 32);
    ctx.drawImage(senior, y, 40, 32, 32);
    ctx.drawImage(senior, z, 10, 32, 32);
    x += 0.10;
    y += 0.050;
    z += 0.080;
    a += 0.31;
    b += 0.26;
    
}




