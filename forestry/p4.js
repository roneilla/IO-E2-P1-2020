var mySpeech = new p5.Speech();

var anger, sad, fear, disgust, joy;

function preload() {
    anger = loadAnimation('/assets/Anger-1.png', 'assets/Anger-2.png');
    sad = loadAnimation('/assets/Sad-1.png', 'assets/Sad-2.png');
    fear = loadAnimation('/assets/Fear-1.png', 'assets/Fear-2.png');
    disgust = loadAnimation('/assets/Disgust-1.png', 'assets/Disgust-2.png');
    joy = loadAnimation('/assets/Joy-1.png', 'assets/Joy-2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(245, 241, 233);
    var offset = 100;
    animation(anger, 100 + offset, height / 2);
    animation(sad, 450 + offset, height / 2);
    animation(fear, 750 + offset, height / 2);
    animation(disgust, 1100 + offset, height / 2);
    animation(joy, 1450 + offset, height / 2);

    if (mouseX >= 25 && mouseX <= 250) {
        anger.play();
        mySpeech.speak('angry');
    } else {
        anger.stop();
    }

    if (mouseX >= 390 && mouseX <= 680) {
        sad.play();
        mySpeech.speak('sad');
    } else {
        sad.stop();
    }

    if (mouseX >= 680 && mouseX <= 1000) {
        fear.play();
        mySpeech.speak('fear');

    } else {
        fear.stop();
    }

    if (mouseX >= 1100 && mouseX <= 1400) {
        disgust.play();
        mySpeech.speak('disgust');

    } else {
        disgust.stop();
    }

    if (mouseX >= 1400 && mouseX <= 1600) {
        joy.play();
        mySpeech.speak('joy');

    } else {
        joy.stop();
    }



    textSize(50);
    text("COLOR + EMOTIONS", width / 2 - 350, 50);
}
