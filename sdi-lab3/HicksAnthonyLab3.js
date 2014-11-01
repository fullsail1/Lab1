//alert("JavaScript works!");
//anthony hicks
//09/09/2014
//following the flowchart





//variable declarations

//var myPlatoonName = "lawdogs";
//var NumberSoldier = 0;
var TheaterName = " \"AMC\"";
var NameMovie = "Avengers";
var DebitcardBal =  100;
var MovieType = "Is it Horror?";
var concessions = false;
var Mymunchies = 0;


console.log("we will go to " + TheaterName + " Theaters for the movies ");
console.log(" Let's see the new " + NameMovie + " Flick ");
console.log(" Only have " + DebitcardBal + " to spend ");
console.log(" Tim said the it is " + concessions + " food at this theater ");

//var securityPoint1 = "Please tell us what dept you wish to visit";
//var securityPointA = ("eastcoast or westcoast");



//confirms
concessions = confirm(" do you want a snack before the movie?");

if (concessions === true){
	Mymunchies = parseInt(prompt("how much did it cost"));
	if (Mymunchies > DebitcardBal){
		console.log("Insufficient funds");
		
	}else
	{
		DebitcardBal = DebitcardBal - Mymunchies;
		console.log(DebitcardBal + " This is whats left on card");
		
	}
	
}

else {
	NameMovie = prompt("Is this want movie we want?", "Avengers");
	if (NameMovie === "Avengers"){
		console.log( NameMovie + " is gonna kick ass");
	}else
	{
		console.log("ok I guess we'll see " + NameMovie );
		