var Car = function() {
   this.wheels = 4;
};

// Only change code below this line.
var myCar = new Car();

//Add the property "engines" to myCar, and make it a number.

myCar.engines = 1;

// Only change code above this line.
(function() {return JSON.stringify(myCar);})();
