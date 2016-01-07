//Let's create an object with a two functions. One attached as a property and one not.
var Car = function() {
  this.gear = 1;
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
  this.getGear = function() {
    return addStyle(this.gear);
  };
};

var Bike = function() {
  // Only change code below this line.
  speed = 100;
  function addUnit(value) {
    return value + "KM/H";
  }
  
  this.getSpeed = function () {
    return addUnit(speed);
  };
  
};

// Only change code above this line.
var myCar = new Car();
var myBike = new Bike();

if(myBike.hasOwnProperty('getSpeed')){(function() {return JSON.stringify(myBike.getSpeed());})();};
