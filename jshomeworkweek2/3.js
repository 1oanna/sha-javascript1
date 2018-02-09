/* Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints "a blue motorbike" for example when called as vehicleType("blue", 2) */



function vehicleType( color, type ) {
	let strType;
	if (type == 1)
		strType = "car";

	if (type == 2)
		strType = "motorbike";

	return "a " + color + " " + strType;
}
console.log(vehicleType("blue", 2));
            

vehicleType(" blue " , 2);
// output "a  blue  motorbike"

/*---- another way-----
function vehicleType( color, type ) {
	let strType;
	if (type == "1")
		strType = "car";

	if (type == "2")
		strType = "motorbike";

	return "a " + color + " " + strType;

}
console.log(vehicleType("blue", 2));


vehicleType(" blue " , "2");

 //output "a  blue  motorbike" */



