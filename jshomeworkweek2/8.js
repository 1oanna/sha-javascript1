/*Change the function vehicle to use the list of question 6. 
So that vehicle("green", 3, 1) prints "a green new caravan". */

function vehicle(color, age, type) {
	const arAges = {
			"1": "old",
			"2": "used",
			"3": "new"
		},

	      arTypes = {
	      	"1": "caravan",
			"2": "car",
			"3": "motorbike"
		};
  
	return "a " + color  + " " + arAges[age]  + " " + arTypes[type];
}
console.log(vehicle(" green ", 3, 1));


	
	vehicle(" green " , 3 , 1);
	

