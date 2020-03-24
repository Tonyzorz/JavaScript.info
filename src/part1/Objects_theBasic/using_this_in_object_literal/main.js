//Create a calculator

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

let calculator = {
	number1 : 0,
	number2 : 0,
	read()  {
		this.number1 = prompt("enter first num");
		this.number2 = prompt("enter second num");
	},
	sum()  {
		return this.number1 + this.number2;
	},
	mul()  {
		return this.number1 * this.number2;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );