var fence;

function setup() {
    createCanvas(windowWidth, windowHeight);
    fence = new geoFenceCircle(43.468708, -79.699567, 2, insideTheFence, outsideTheFence, 'mi'); // make the fence circle
    // geo fence circle parameters:
    // (lat, long, fence distance, inside callback, outside callback, units)
}

function insideTheFence(position) {
    // if the user is inside the fence, this function will run.

    print("INlat: " + position.latitude);
    print("INlong: " + position.longitude);
    print("user is inside of the fence");

    // change everything down here

    background("blue");
    textAlign(CENTER);
    textSize(25);
    text("Welcome to Sheridan!", windowWidth / 2, windowHeight / 2);
}

function outsideTheFence(position) {
    // if the user is outside the fence, this function will run.

    print("OUTlat: " + position.latitude);
    print("OUTlong: " + position.longitude);
    print("user is outside of the fence");

    // change everything down here

    background("white");
    textAlign(CENTER);
    textSize(25);
    text("You're out!", windowWidth / 2, windowHeight / 2);
}
