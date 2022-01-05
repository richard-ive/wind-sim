//configure Timer 1 (pins 9,10) to output 25kHz PWM
void setupTimer1(){
    //Set PWM frequency to about 25khz on pins 9,10 (timer 1 mode 10, no prescale, count to 320)
    TCCR1A = (1 << COM1A1) | (1 << COM1B1) | (1 << WGM11);
    TCCR1B = (1 << CS10) | (1 << WGM13);
    ICR1 = 320;
    OCR1A = 0;
    OCR1B = 0;
}

//equivalent of analogWrite on pin 9
void setPWM1A(float f){
    f=f<0?0:f>1?1:f;
    OCR1A = (uint16_t)(320*f);
}

//equivalent of analogWrite on pin 10
void setPWM1B(float f){
    f=f<0?0:f>1?1:f;
    OCR1B = (uint16_t)(320*f);
}

void setup(){
    //enable outputs for Timer 1
    pinMode(9,OUTPUT); //1A
    pinMode(10,OUTPUT); //1B
    setupTimer1();
    //note that pin 11 will be unavailable for output in this mode!
    //example...
    setPWM1A(0.01f); //set fan to min
    setPWM1B(0.01f); //set fan to min
    
    Serial.begin(9600); //enable serial so we can see the RPM in the serial monitor
    Serial.println("READY"); //announce that we're setup and READY.
}

String message;
void loop(){
    while(Serial.available() > 0){
      message = Serial.readStringUntil('\n');
      setPWM1A(message.toFloat());
      setPWM1B(message.toFloat());
    }
}
