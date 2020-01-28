 var mySpeech = new p5.Speech();
 var myRec = new p5.SpeechRec('en-US', checkAudio);

 myRec.continuous = true;
 myRec.interimResults = true;

 var redButton, orangeButton, yellowButton, blueButton, greenButton, purpleButton;

 var mostrecentword;

 var speechResult;

 let fontBold, img;

 var newColor;

 var r, g, b;

 var colorResult = false;

 var rotateAngle = 0;


 function preload() {
     fontBold = loadFont('assets/bold.otf');
     img = loadImage('assets/form.png');
 }

 function setup() {
     createCanvas(windowWidth, windowHeight);
     background(253, 250, 254);

     redButton = createButton('Red');
     redButton.position(100, 130);
     redButton.mousePressed(redFnc);

     orangeButton = createButton('Orange');
     orangeButton.position(100, 230);
     orangeButton.mousePressed(orangeFnc);

     yellowButton = createButton('Yellow');
     yellowButton.position(100, 330);
     yellowButton.mousePressed(yellowFnc);

     blueButton = createButton('Blue');
     blueButton.position(200, 130);
     blueButton.mousePressed(blueFnc);

     greenButton = createButton('Green');
     greenButton.position(300, 230);
     greenButton.mousePressed(greenFnc);

     purpleButton = createButton('Purple');
     purpleButton.position(300, 330);
     purpleButton.mousePressed(purpleFnc);

     imageMode(CENTER);
     angleMode(DEGREES);

     myRec.start();
 }

 function draw() {
     background(r, g, b);

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
     } else {
         r = 253;
         g = 250;
         b = 254;
     }

     fill(51, 51, 51);
     textAlign(CENTER);
     textFont(fontBold);
     textSize(72);
     text("LEARN YOUR COLOURS", width / 2, 100);

     if (colorResult == true) {
         restartFnc();
     }

     translate(width / 2, 800);
     rotate(rotateAngle);
     image(img, 0, 0, img.width / 2, img.height / 2);
 }

 function restartFnc() {
     r = 253;
     g = 250;
     b = 254;

     rotateAngle += 1;
 }

 function redFnc() {
     newColor = "red";
     console.log("the color is " + newColor)
     mySpeech.speak(newColor);

     rotateAngle = 0;
 }

 function orangeFnc() {
     newColor = "orange";
     console.log("the color is " + newColor)
     mySpeech.speak(newColor);

     rotateAngle = -60;

 }

 function yellowFnc() {
     newColor = "yellow";
     console.log("the color is " + newColor)
     mySpeech.speak(newColor);
     rotateAngle = -120;

 }

 function greenFnc() {
     newColor = "green";
     console.log("the color is " + newColor);
     mySpeech.speak(newColor);
     rotateAngle = -180;

 }

 function blueFnc() {
     newColor = "blue";
     console.log("the color is " + newColor)
     mySpeech.speak(newColor);

     rotateAngle = -240;

 }

 function purpleFnc() {
     newColor = "purple";
     console.log("the color is " + newColor)
     mySpeech.speak(newColor);
 
     rotateAngle = -300;

 }


 function checkAudio() {
     mostrecentword = myRec.resultString;
     console.log(mostrecentword);
     if (mostrecentword.indexOf(newColor) !== -1) {
         console.log("congrats!");
         speechResult = "congrats";

         setTimeout(function () {
             colorResult = true;
         }, 2000);

     } else {
         console.log("try again");
         speechResult = "try again!";
     }
 }
