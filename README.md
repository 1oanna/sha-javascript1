# sha-javascript1


---- homework week 1 -----

Make one .js file for each of the following

1. declare a variable  x and initialize it with an integar

2. round the number 7.25 to the nearest whole number

3. create an array called colors with red,green,blue

4. find the length of the array colors created in the previous file and print it in console

5. check types of a and b and print out in console same type if they are same type

6. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?


---- homework week 2 ------

Make one .js file for each of the following

1. Create a function that takes 3 arguments and returns the sum of the three arguments.

2. Create a function named colorCar that receives a color, and prints out, "a red car" for example.

3. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints "a blue motorbike" for example when called as vehicleType("blue", 2)

4. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 == 3) {
    console.log("true")
} else {
    console.log("false")
    
5. Create a function called vehicle, like before, but takes another parameter called age, so that
vehicle("blue", 1, 2) prints "a blue used car".
vehicle("blue", 1, 1) prints "a blue new car".

6. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

7. How do you get the third element from vehicles?
let vehicles = ["motorbike" , "caravan" , "bike" , "citycar" , "4x4"];

8. Change the function vehicle to use the list of question 6. 
So that vehicle("green", 3, 1) prints "a green new caravan"

9. Use the list of vehicles to write an advertisement. 
So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans, bikes."

10. What if you add one more vehicle to the list, 
can you have that added to the advertisement 
without changing the code for question 9?

11. Write some code to test two arrays for equality using == and ===. Test the following:
    var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
What do you think will happen with x == y, x === y and z == y and z == x?

12. What does the following code return? (And why?)
let bar = 42; 
typeof typeof bar;


---- homework week 3 -----

Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

Create a basic html file called index.html and use it to load the js file, confirm the console.log() show the array. (This is for debugging and making sure everything is in order. You can delete the console.log() later when you're done :))

Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.

Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

Beautify your html page with css, add sources and alts to each of the images.

Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)
