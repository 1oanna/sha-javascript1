/* Use the list of vehicles to write an advertisement. 
So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans, bikes.". */


let phrase = "Amazing Joe's Garage, we service, ";
let ar = [" cars " ,  " motorbikes " , " caravans " , " bikes "];



console.log(phrase + " " + ar.join());



/*function doCommercial() {
	let ar = ["cars", "motorbikes", "caravans", "bikes"];

	let phrase = "Amazing Joe's Garage, we service ";
	for (let i = 0; i < ar.length; i++) {


		
	}
}
		console.log(phrase + " " + ar.join());