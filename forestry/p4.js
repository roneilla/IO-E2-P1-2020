// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js


// serial server variables
var serial;
var options = {
    baudRate: 9600
};
var portName = '/dev/cu.usbmodem14101';
var inData;
var inText;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(125, 255, 200);
    frameRate(120);

    serial = new p5.SerialPort();
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.open(portName, options);


}

function draw() {
    background(100, 175, 75);
    
    fill(0);
    textAlign(CENTER);
    textSize(40);
    
    if (inData == undefined) {
        inData = 0;
    }
    
    text("This is what the earth's forests looked like " + inData + " years ago", width / 2, height / 2 - 150);
    
    for (var i = 0; i < inData; i++) {
        fill(50, 125, 30);
        ellipse(random(0, i + 20) + random(0, width), random(0, i + 20) + random(0, height), 50, 50);
    }
    
    smooth();
}

function serialEvent() {
    var inString = serial.readStringUntil('\r\n');

    inData = inString;

    //    inData = Math.floor(inData);

    console.log(inData);
}

function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
}


function restartFnc() {

}
