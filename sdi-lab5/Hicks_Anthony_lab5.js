//alert("JavaScript works!");

var digit1;
var digit2;
var operator;
var solution;

//prompts
digit1 = parseInt(prompt("please enter number"));
operator = prompt("+, -, *, /");
digit2 = parseInt(prompt("please enter number"));

//functions
var myaddfunction = function(add1, operator, add2) {

	var totala = (add1 + add2);

//	console.log("your " + total + " is correct");

	return totala;
};

var mysubfunction = function(sub1, operator, sub2) {
	var totals = sub1 - sub2;

	console.log("your " + total + " is correct");

	return totals;
};
var mytimesfunction = function(multi1, operator, multi2) {
	var totalm = multi1 * multi2;

	//console.log("your " + total + " is correct");

	return totalm;
};

var myDivfunction = function(div1, operator, div2) {
	var totald = div1 / div2;

	//console.log("your " + total + " is correct");

	return totald;
};

//conditionals

if (operator == "+" ) {
	//then it should use my add function
	//confirm("u picked" + operator + "  so you want to add ");
	
	solution=	myaddfunction(digit1, operator, digit2);
	
} else if (operator == "-"){
	
	solution=	mysubfunction(digit1, operator, digit2);

} else if (operator == "*"){
	
	solution = mytimesfunction(digit1, operator, digit2);
	
	
} else if (operator == "/"){
	
	if(digit2 == 0) {
		while (digit2 == 0){
			digit2 = prompt ("enter new number");	
		}
		solution = myDivfunction(digit1, operator, digit2);
		
	} else {
	
	solution=	myDivfunction(digit1, operator, digit2);
	}

} else {
	console.log("Please enter a operator");
};

console.log(" this is your answer " + solution );


