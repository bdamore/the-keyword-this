// We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  //  1) What is the purpose of the 'this keyword'?
        // Answer
          //  2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
                // Answer
                  //  3) What is the difference between call and apply?
                        // Answer
                          //  4) What does .bind do?
                                // Answer

// Next Problem
// Create an object called user which has the following properties.
  // username --> which is a string
  // email --> which is a string
  // getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
      // Code Here
      var user = {
        username: 'brian',
        email: 'brian.damore@mailinator.com',
        getUsername: function getUsername() {
            return this.username;
        }
      }

      // Now, invoke the getUsername method and verify you got the username of the object and not anything else.
      user.getUsername();
      // Next Problem

//  Write the function definitions which will make the following function invocations function properly.
  // Function Invocations Here

  function Car(make, model, year) {
    var newCar = {};
    newCar.make = make;
    newCar.model = model;
    newCar.year = year;
    newCar.move = 0;
    return newCar;
  }

  function moveCar() {
    var Car = this;     // remember to define everytime
    this.move += 10;
    return Car.move;
  }

  var prius = new Car('Toyota', 'Prius', 2011);
  var mustang = new Car('Ford', 'Mustang', 2013);

  prius.moveCar = moveCar; // save method to function defin
  mustang.moveCar = moveCar;

  prius.moveCar();
  console.log(prius.move);
  prius.moveCar();
  console.log(prius.move);

// Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).

// Continuation of previous problem
var getYear = function(){
  return this.year;
};

// Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.
  // Code Here
  getYear.call(prius);
  getYear.cal(mustang);

  // New Problem

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};
var getUsername = function(){
  console.log(this.username);
};
setTimeout(getUsername.bind(user), 5000); //could use call but its not as encompassing, in case you wanted to call age

// Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
  // Answer Here
  nothing
  // In the example above, what is the 'this keyword' bound to when getUsername runs?

    // Answer Here

    // Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
