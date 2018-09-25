// prototype example

function Vehicle(make, model, year){
    this.make = make
    this.model = model
    this.year = year

    this.isRunning = false;

    this.honk = function(){
        if(this.isRunning){
            console.log("beep!");
        }
    }
}

Vehicle.prototype.turnOn = function(){ this.isRunning = true};
Vehicle.prototype.turnOff = function(){ this.isRunning = false};