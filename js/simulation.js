function startSimulation() {
    var senior = new Image();
    var youngPerson = new Image();

    function init() {

        senior.src = "images/senior.png";
        youngPerson.src = "images/youngPerson.png"
        window.requestAnimationFrame(animate);

    }

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
    var sensorMid = 0;

    function animate() {
        var ctx = document.getElementById('canvas').getContext('2d');
        window.requestAnimationFrame(animate);


        ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.drawImage(youngPerson, a, 90, 32, 32);
        ctx.drawImage(youngPerson, b, 20, 32, 32);
        ctx.drawImage(senior, x, 70, 32, 32);
        ctx.drawImage(senior, y, 40, 32, 32);
        ctx.drawImage(senior, z, 10, 32, 32);
        x += 0.25;
        y += 0.14;
        z += 0.19;
        a += 0.39;
        b += 0.31;

        ctx.beginPath();
        ctx.moveTo(150, -50);
        ctx.lineTo(150, 250);
        ctx.strokeStyle = "red";
        ctx.stroke();


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

        if (x > 150 && center1 == false) {
            console.log("senior reached center");
            center1 = true;
        }

        if (y > 150 && center2 == false) {
            console.log("senior reached center");
            center2 = true;
        }

        if (z > 150 && center3 == false) {
            console.log("senior reached center");
            center3 = true;
        }


        if (x > 150 && y > 150 && z > 150 && sensorMid == 0) {
            console.log("all seniors have passed center");
            sensorMid = 1;
        }

    }

    var seconds = 30;
    var timeout = false;

    var timer = setInterval(secondsTimer, 1000);

    function secondsTimer() {

        var countdown = document.getElementById('countdown');
        if (seconds == 0 && timeout == false || sensorMid == 1) {

            console.log("last senior took " + (30 - seconds) + " seconds to reach the center");
            seconds = 30 - seconds + 5;
            console.log("Adding " + seconds + " seconds");
            timeout = true;
            sensorMid = 2;
        } else {
            countdown.innerHTML = seconds + ' seconds remaining';
            seconds--;
        }

        if (seconds == 0 && timeout == true) {
            countdown.innerHTML = 'Out of time, stop light starts flashing';
            clearInterval(timer);
        }

    }
}
