/*What if you add one more vehicle to the list, 
can you have that added to the advertisement 
without changing the code for question 9? */

let ar = ["cars", "motorbikes", "caravans", "bikes"];
let br = ar.push("4X4")

let phrase = "Amazing Joe's Garage, we service, ";

console.log(phrase + " " + ar.join());