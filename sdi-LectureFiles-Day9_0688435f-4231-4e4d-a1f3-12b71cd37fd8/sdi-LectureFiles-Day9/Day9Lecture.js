//Anthony Hicks
//Lab 9

var myNumber = 93.00923;
var myNumber2 = 2;
var numResult;

//function
var myfmNumber = function(aNumber1, aNumber2){
		
	var newNumber = aNumber1.toFixed(aNumber2);
	return newNumber;
	
	
	
	
	
};
//code

numResult = myfmNumber(myNumber, myNumber2);
console.log(" the new number = " +  numResult );


var myNumber = "56";
var extrNumb;

//function

var numExtract = function (aNumber){
	
	var num = isNaN(aNumber);
	if (num == true){
		return false;	
	}else{
		num = parseInt(aNumber);
		return num;
		
		
	}
	
	
	
};

extrNumb = numExtract(myNumber);
if ( extrNumb == false){
	console.log("this is not a number");
	
}else{
	console.log(extrNumb + " was found in the string");

}


var date1 = new Date("06/20/1994");
var date2 = new Date("03/12/1992");
var datecalc;
var timeChoice = " hours ";

//function

var datDiff = function(adate1, adate2, choice1){
	
	var datecalcHours = adate1 - adate2;
	 	
	 	 return datecalcHours;
	//var datecalcDays =  adate1 - adate2;
	
};
datecalc = datDiff(date1, date2, timeChoice);
console.log("the result is " + datecalc);





