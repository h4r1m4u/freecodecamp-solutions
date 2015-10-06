// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers.
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();

// Only change code below this line.
var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};

var myMotorBike = new MotorBike();
// Only change code above this line.

(function() {return JSON.stringify(myMotorBike);})();
