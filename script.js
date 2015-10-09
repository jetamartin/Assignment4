//*************************************************************************************************/
//Practice with JavaScript OOP Concepts (10 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
//*************************************************************************************************/

//1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog.

//var ANIMAL = ANIMAL || { };
//ANIMAL.Cat = function () { };
//ANIMAL.Dog = function () { };


//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation
//var Cat = {};
//function Dog() {}
    

//3.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
//var cat = new Cat();
//var dog = new Dog();

//4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
//function Animal() {
//    window.console.log("The animal has been created");
//}
//var theAnimal = new Animal();


//5.	Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
//var Animal = function (animalType) {
//    window.console.log("The type of animal is a: " + animalType);
//};
//var theAnimal = new Animal("cat");

//6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var theAnimal = new Animal("Dog", "Pitbull",  "grey", 36, 48);

//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
//var element;
//for (element in theAnimal) {
//    window.console.log(element);
//}

//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//    this.speak = function (type) {
//        if (this.type === "dog") {
//            window.console.log("The " + this.color + " dog is barking!");
//        } else if (this.type === "cat") {
//            window.console.log("The " + this.color + " cat is meowing!");
//        }
//        
//    };
//}
//var theAnimal = new Animal("dog", "Pitbull",  "grey", 36, 48);
//theAnimal.speak("dog");

//9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

//function Animal(type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    var checkType = function (type) {
//        if (type === "dog") {
//            return "dog";
//        } else {
//            return "cat";
//        }
//    };
//    this.speak = function (type) {
//        window.console.log("The " + checkType(type) + " has made a noise!");
//        
//    };
//}
//var theAnimal = new Animal("dog", "Pitbull",  "grey", 36, 48);
//theAnimal.speak("dog");

//10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.

//var paragraph = "Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.";
// 
//String.prototype.findWords = function (word, str) {
//    var wordCount = 0, strArray = [], element;
//    strArray = str.split(" ");
//    for (element in str) {
//        if (strArray[element] === word) {                wordCount += 1;
//            }
//    }
//
//    window.alert("The word \"" +  word + "\" appears in the string " + wordCount + " times");
//    
//    
//};
//paragraph.findWords("the", paragraph);


//Does My Vehicle Need An Oil Change? (10 points)
//In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:
//11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
//var Vehicle = function (make, model, totalMiles, lastOilChgMileage) { };

//12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
//          totalMiles =  what you've accumulated to a certain point.
//          drivenMiles = the amount of miles that you've driven since the last oil change.
//          totalMiles - lastOilChange + drivenMiles...is that value greater than 3,000?

//var Vehicle = function (make, model, totalMiles, lastOilChangeMileage) {
//    this.make = make;
//    this.model = model;
//    this.totalMiles = totalMiles;
//    this.lastOilChangeMileage = lastOilChangeMileage;
//    this.drivenMiles = 0;
//    this.type = " ";
//};

//13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).
//Vehicle.prototype.drive = function (miles) {
//    this.drivenMiles += miles;
//    return this;
//};

//14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
//Vehicle.prototype.checkOil = function () {
//    var oilChangeMessage = "Time to change your oil";
//    if ((this.totalMiles - this.lastOilChangeMileage + this.drivenMiles) >= 3000) {
//        return oilChangeMessage;
//    } else {
//        return this;
//    }
//};

//15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has.

//var Car = function (doorCount) {
//};

//16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
//var Car = function (doorCount) {
//    this.doorCount = doorCount;
// };


//17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

//var Car = function (doorCount) {
//    this.doorCount = doorCount;
//    if (doorCount >= 2) {
//        this.type = "Sedan";
//    } else {
//        this.type = "Coupe";
//    }
//};
//18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 
//Car.prototype = new Vehicle("Mazda", "CV-5", 12000, 10000);

//19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
//var myCar = new Car(2);

//20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.

//window.console.log(myCar.drive(1000).checkOil());

//The Recipe Card (10 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper

//var Recipe = {
//    title: "Guacamole",
//    servings: 4,
//    ingredients: ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"],
//    printRecipe: function () {
//        var element;
//        window.console.log(Recipe.title);
//        window.console.log("Serves: " + Recipe.servings);
//        window.console.log("Ingredients:");
//        for (element in Recipe.ingredients) {
//            window.console.log("- " + Recipe.ingredients[element]);
//        }
//    }
//};


//Recipe.printRecipe();

//The Reading List (10 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
//var bookList = [];
//var Book = function (title, author, alreadyRead) {
//    this.title = title;
//    this.author = author;
//    this.alreadyRead = alreadyRead;
//};
//bookList[0] = new Book("Hamlet", "William Shakespeare", true);
//bookList[1] = new Book("War and Peace", "Leo Tolstoy", true);
//bookList[2] = new Book("The Odyssey", "Homer", false);
//bookList[3] = new Book("The Great Gatsby", "F. Scott Fitzgerald", true);
//bookList[4] = new Book("The Catcher and the Rye", "J.D. Salinger", false);
//
//function printReadingList() {
//    var element;
//    for (element in bookList) {
//        if (bookList[element].alreadyRead) {
//            window.console.log("You already read \"" +
//                               bookList[element].title + "\" by " + bookList[element].author);
//        } else {
//            window.console.log("You still need to read \"" +
//                               bookList[element].title + "\" by " + bookList[element].author);
//        }
//    }
//}

//printReadingList();

//Fill in the Blanks (10 points)

//Fill in the blanks to make this program work.
//(function () {
//    var person = {
//        // add code here
//        buy: function (car) {
//            window.console.log("I'm rich");
//        }
//    };
//
//    var car = {
//        // add code here
//        price: 150000,
//        drive: function () {
//            window.console.log("vroom vroom");
//        }
//    };
//
//    // print vroom vroom
//    car.drive();
//
//    // print 'I'm rich'
//    if (car.price > 100000) {
//        person.buy(car);
//    }
//}());
