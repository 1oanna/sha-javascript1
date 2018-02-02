/* Create a function called vehicle, like before, but takes another parameter called age, so that
vehicle("blue", 1, 2) prints "a blue used car".
vehicle("blue", 1, 1) prints "a blue new car". */


function vehicle(color, age, type) {
	const arAges = {
			"1": "new",
			"2": "used"
		},

	      arTypes = {
			"1": "car",
			"2": "motorbike"
		};
  
	return "a " + color  + " " + arAges[age]  + " " + arTypes[type];
}
console.log(vehicle(" blue ", 1, 1));


	vehicle(" blue " , 1 , 1);
	vehicle(" blue " , 1 , 2);
	vehicle(" blue " , 2 , 1);
	vehicle(" blue " , 2 , 2);

	//output "a blue new car"
