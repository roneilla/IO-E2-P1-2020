int sensVal;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A4);

  sensVal = map(sensorValue, 0, 1023, 0, 200);

  // print out the value you read:
  Serial.println(sensVal);
  delay(1);        // delay in between reads for stability
}
