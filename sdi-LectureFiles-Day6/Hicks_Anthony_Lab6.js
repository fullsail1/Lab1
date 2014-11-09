//Anthony Hicks
//SDI1411_LAB 6
//


var fantasyfootball = function (){
	
	var myteamArrays = ["cowboys", "redskins", "eagles", "ravens"];
	var mycityArrays = ["dallas", "dc", "philly", "bmore"];
	
	
	for (i = 0; i < myteamArrays.length; i++) {
		console.log(myteamArrays[i] + "  play in  " + mycityArrays[i]);
		
	}

	myteamArrays.splice(0, 1, "Texans");
	mycityArrays.splice(0, 1, "Houston");
	console.log(myteamArrays);
	console.log(mycityArrays);
	
};

fantasyfootball();

