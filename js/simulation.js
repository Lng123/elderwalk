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

var first1 = false;
var first2 = false;
var first3 = false;
var center1 = false;
var center2 = false;
var center3 = false;
var last = false;
var sensorMid = false;

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

    
    if (x > 20 && first1 == false) {
        console.log("senior card detected");
        first1 = true;
    }

    if (y > 20 && first2 == false) {
        console.log("senior card detected");
        first2 = true;
    }

    if (z > 20 && first3 == false) {
        console.log("senior card detected");
        first3 = true;
    }
    
    if (x > 140 && center1 == false) {
        console.log("senior passed center");
        center1 = true;
    }
    
    if (y > 140 && center2 == false) {
        console.log("senior passed center");
        center2 = true;
    }
    
    if (z > 140 && center3 == false) {
        console.log("senior passed center");
        center3 = true;
    }
    
    
    if (x > 350 && y > 350 && z > 350 && sensorMid == false) {
        console.log("all seniors have passed center");
        sensorMid = true;
    }
    
    /*
    if ((x > 200 || y > 200 || z > 200) && last == false) {
        console.log("street crossed");
        last = true;
    }
    */
    
    
    
}




