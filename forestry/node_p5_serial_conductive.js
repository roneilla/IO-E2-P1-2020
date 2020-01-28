// Terminal command to start server:  node ~/node_modules/p5.serialserver/startserver.js


// serial server variables
var serial;
var options = {
    baudRate: 9600
};
var portName = '/dev/cu.usbmodem14101';
var inData;

function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(253, 250, 254);

    serial = new p5.SerialPort();
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.open(portName, options);


}

function draw() {
    text("Clearcutting in Canada");
    
}

function serialEvent() {
    var inString = serial.readStringUntil('\r\n');
    console.log(inString);
}

function serialError(err) {
    println('Something went wrong with the serial port. ' + err);
}


function restartFnc() {

}
