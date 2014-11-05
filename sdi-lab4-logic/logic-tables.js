//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;
var counter = 9;

while (counter>1){


p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("third value: Click OK for true or Cancel for false. ");

if (p || (q || r)) {
    console.log("if " + p + " and  " + q + "  and  " + r + ", the outcome is TRUE.");
} else{
	console.log("if " + p + " and " + q + "  and  " + r + ", the outcome is FALSE.");

};

counter--;

}







// problem 1

var fullTicket = 12;
var disTicket = 7;
var uAge;

uAge = prompt (" Enter Age Please ");

if (uAge >= 55 || uAge < 10) {
	console.log("Thank you, Please pay " + disTicket + "dollars" + " And enjoy your movie ");
	
}
	else {
	console.log(" Your total is " + fullTicket);
};

// problem 2

var myCar = "Pegasus";
var fRTP = 0;
var fLTP = 0;
var bRTP = 0;
var bLTP = 0;


fLTP = parseFloat(prompt("enter front Left Tire Pressure"));
fRTP = parseFloat(prompt("enter front Right Tire Pressure"));
bLTP = parseFloat(prompt("enter back Left Tire Pressure"));
bRTP = parseFloat(prompt("enter back Right Tire Pressure"));
// if frtp and fltp are same but 
if (fRTP === fLTP && bLTP === bRTP) {
	console.log( myCar + " tire pressure is good");
} else {
	   console.log( myCar + "  tire pressure is not good");	
}

   

   
 






























	
