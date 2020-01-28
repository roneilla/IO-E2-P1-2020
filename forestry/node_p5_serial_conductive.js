// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js


// serial server variables
var serial;
var options = {
    baudRate: 9600
};
var portName = '/dev/cu.usbmodem14601';
var inData;

var redSensor, orangeSensor, yellowSensor, greenSensor, blueSensor, purpleSensor;

var textIn = "LEARN YOUR COLOURS";

//speech

var mySpeech = new p5.Speech();
var myRec = new p5.SpeechRec('en-US', checkAudio);

myRec.continuous = true;
myRec.interimResults = true;

// other
var redButton, orangeButton, yellowButton, blueButton, greenButton, purpleButton;

var startButton;

var newColor;

var mostrecentword;

var speechResult;

let fontBold, img;

var newColor;

var r = 253;
var g = 250;
var b = 254;

var colorResult = false;

var rotateAngle = 0;

function preload() {
    fontBold = loadFont('assets/bold.otf');
    img = loadImage('assets/form.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(253, 250, 254);

    serial = new p5.SerialPort();
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.open(portName, options);

    imageMode(CENTER);
    angleMode(DEGREES);

    mySpeech.started();
    myRec.start();
}

//function draw() {
//    background(255);
//    startButton = createButton('Start');
//    startButton.position(width / 2, height / 2);
//
//    if(start.mousePressed == true){
//        startGame();
//        startButton.hide();
//    }
//}

function draw() {
    background(r, g, b);

    startButton = createButton('Begin');
    startButton.position(width / 2, 200);
    startButton.mousePressed(resumeAudio);

    if (newColor == "red") {
        r = 242;
        g = 73;
        b = 73;
    } else if (newColor == "orange") {
        r = 252;
        g = 146;
        b = 68;
    } else if (newColor == "yellow") {
        r = 247;
        g = 228;
        b = 71;
    } else if (newColor == "green") {
        r = 117;
        g = 217;
        b = 86;
    } else if (newColor == "blue") {
        r = 75;
        g = 163;
        b = 250;
    } else if (newColor == "purple") {
        r = 170;
        g = 86;
        b = 232;
    }
    
    if(colorResult == true){
        restartFnc();
    }

    fill(51, 51, 51);
    textAlign(CENTER);
    textFont(fontBold);
    textSize(72);
    text(textIn, width / 2, 100);
    translate(width / 2, 800);
    rotate(rotateAngle);
    image(img, 0, 0, img.width / 2, img.height / 2);
}

function resumeAudio() {
    getAudioContext.resume;
    console.log("listening");
}

function serialEvent() {
    var inString = serial.readStringUntil('\r\n');
    if (inString.length > 0) {
        var sensors = split(inString, ',');
        if (sensors.length > 1) {
            //   inData = Number(inString);
            //console.log(inString);
            redSensor = sensors[5];
            orangeSensor = sensors[4];
            yellowSensor = sensors[3];
            greenSensor = sensors[2];
            blueSensor = sensors[1];
            purpleSensor = sensors[0];

            if (redSensor != 0) {
                redFnc();
            } else if (orangeSensor != 0) {
                orangeFnc();
            } else if (yellowSensor != 0) {
                yellowFnc();
            } else if (greenSensor != 0) {
                greenFnc();
            } else if (blueSensor != 0) {
                blueFnc();
            } else if (purpleSensor != 0) {
                purpleFnc();
            }
        }
    }
}

function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
}


function restartFnc() {
    r = 253;
    g = 250;
    b = 254;


    // rotateAngle += 0.5;
}

function redFnc() {
    newColor = "red";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);


    stopAudio();

    rotateAngle = 0;

    r = 242;
    g = 73;
    b = 73;
}

function orangeFnc() {
    newColor = "orange";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);

    stopAudio();

    rotateAngle = -60;

    r = 252;
    g = 146;
    b = 68;

}

function yellowFnc() {
    newColor = "yellow";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);

    stopAudio();

    rotateAngle = -120;

    r = 247;
    g = 228;
    b = 71;
}

function greenFnc() {
    newColor = "green";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);

    stopAudio();

    rotateAngle = -180;

    r = 117;
    g = 217;
    b = 86;
}

function blueFnc() {
    newColor = "blue";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);

    stopAudio();

    rotateAngle = -240;

    r = 75;
    g = 163;
    b = 250;

}

function purpleFnc() {
    newColor = "purple";
    console.log("the color is " + newColor);
    mySpeech.speak(newColor);

    stopAudio();

    rotateAngle = -300;

    r = 170;
    g = 86;
    b = 232;

}

function stopAudio() {
    setTimeout(function () {
        mySpeech.stop();
    }, 600);
}


function checkAudio() {
    mostrecentword = myRec.resultString;
    console.log(mostrecentword);
    if (mostrecentword.indexOf(newColor) !== -1) {
        console.log("congrats!");
        speechResult = "congrats";
        textIn = "GOOD JOB!";
        setTimeout(function () {
            restartFnc();
            colorResult = true;
            console.log("new colour");
            textIn = "LEARN YOUR COLOURS";
        }, 2000);

    } else {
        console.log("try again");
        speechResult = "try again!";
        textIn = "TRY AGAIN";
        setTimeout(function () {
            textIn = "LEARN YOUR COLOURS";
        }, 2000);
    }
}
