    //1 Create namespace (Animal) and create two subclasses of it (Cat, and dog)
/*var ANIMAL = ANIMAL || {};
ANIMAL.Dog = function(){}
ANIMAL.Cat = function(){}*/

    //2	Two classes - Cat (literal notation) and another called Dog (using constructor notation).

/*var Cat = {
    alliance: "Neutral"
};

var Dog = function Dog(alliance) {
    'use strict';
    this.alliance = "Good";
}*/

    //3 Instance of dog class
/*
var Dog = function Dog(alliance) {
    'use strict';
    this.alliance = "Good";
};
var myDog = new Dog(); //here
*/

    //4 New class using constructor notation called Animal. When a new instance of the Animal class is created, display in console "The Animal has been created".
/*
function Animal() {
    console.log("The Animal has been created!");
}
var Cat = new Animal();
*/

    //5	Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
/*
function Animal(type) {
    'use strict';
    this.type = type;
    window.console.log(this.type);
}
var Cat = new Animal("Feline");
*/

    //6	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 

/*
function Animal(type, breed, color, height, length) {
    'use strict';
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log(this.type, this.breed, this.color, this.height, this.length);
}
var Cat = new Animal("Feline", "Siamese", "White", "23in", "short-hair");
*/

    //7	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

/*function Animal(type, breed, color, height, length) {
    'use strict';
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var x;
var Cat = new Animal("Feline", "Siamese", "White", "23in", "short-hair");
for (x in Cat) {
    if (Cat.hasOwnProperty(x)) {
        window.console.log(x);
    }
}*/

    //8 Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

function Animal(type) {
    'use strict';
    this.type = type;
}
var Cat = new Animal("Cat");

function speak() {
    'use strict';
    if (type == "Dog") {
        window.console.log('The dog is barking!');
    } else if (type == "Cat") {
        window.console.log('The cat is meowing!');
    }
}
speak();










