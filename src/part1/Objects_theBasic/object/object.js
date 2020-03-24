/**
 * 
 */
//hello object
	let user = {};
	user.name = "John";
	user.surname = "Smith";
	
	for (let key in user){
		console.log(user[key]);
	}
	
	user.name = "Pete";
	
	console.log(user.name);
	
	delete user.name;

//Check for emptiness
	let schedule = {};
	
	console.log(isEmpty(schedule));
	
	function isEmpty(schedule){
		
		for(let key in schedule){
			return false;
		}
		
		return true;
	}
	
//Sum object properties
	let salaries = {
		John : 100,
		Ann: 160,
		Pete: 130,
	};
	
	console.log(sumSalaries(salaries));
	function sumSalaries(salaries){
		let totalSum = 0;
		
		for(let key in salaries){
			totalSum += salaries[key];
		}
		
		return totalSum;
	}
	
//Multiply numeric properties by 2
	let menu = {
	  width: 200,
	  height: 300,
	  title: "My menu"
	};
	
	
	function multiplyNumeric(menu){
		
		for(let key in menu){
			if(typeof menu[key] == 'number'){
				menu[key] *= 2;
			}
		}
	}
	console.log(menu);
	multiplyNumeric(menu);
	console.log(menu);

	