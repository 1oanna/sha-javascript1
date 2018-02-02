/* Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints "a blue motorbike" for example when called as vehicleType("blue", 2) */



function vehicleType( color, type ) {
	let strType;
	if (type == 1)
		strType = "car";

	if (type == 2)
		strType = "motorbike";

	return "a " + color + " " + strType;

console.log(vehicleType("blue", 2));
            
}

vehicleType(" blue " , 1);
vehicleType(" blue " , 2);
// output "a  blue  motorbike"

//---- another way-----
function vehicleType( color, type ) {
	let strType;
	if (type == "1")
		strType = "car";

	if (type == "2")
		strType = "motorbike";

	return "a " + color + " " + strType;

console.log(vehicleType("blue", 2));
            
}

vehicleType(" blue " , "1");
vehicleType(" blue " , "2");
//output "a  blue  motorbike"




/* -----simpler  way  but i think it is wrong,not sure if this is what you ask i didn't use type 1,2 the way you want it ----

function vehicleType(color, type) {
 console.log(" a " +   color   +  type);
}
 
vehicleType(" blue " , " car ");
vehicleType(" blue " , " motorbike ");

output // a  blue  car // notice there are no ""
	  a  blue  motorbike // notice there are no ""
undefined