#include <CapacitiveSensor.h>

CapacitiveSensor touchSwitch = CapacitiveSensor(4, 2);
int led_pin = 13;    // Initializing th


void setup() {
  pinMode(led_pin, OUTPUT); // Declaring the LED pin as output pin

  Serial.begin(9600);
}

void loop() {
  long val = touchSwitch.capacitiveSensor(30);
  long vol = constrain(val, 0, 100);
  vol = map(vol, 100, 0, 0, 255);
  Serial.println(vol);
//if (Serial.available ( ) > 0) {   // Checking if the Processing IDE has send a value or not
//
//    char state = Serial.read ( );    // Reading the data received and saving in the state variable
//
//    if (state == '1')            // If received data is '1', then turn on LED
//    {
//
//      digitalWrite (led_pin, HIGH);
//
//    }
//
//    if (state == '0') {     // If received data is '0', then turn off led
//
//      digitalWrite (led_pin, LOW);
//
//    }
//    } 
//
//delay(50);
}
