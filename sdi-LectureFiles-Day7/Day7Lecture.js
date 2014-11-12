
var boughtdrink1;

var beerConstructor = function(beer, size, country, type){
	
	this.beer = beer;
	this.size = size;
	this.country = country;
	this.type = type;
	this.sold = true;
	this.sizeopt = function(newSize){
		this.size = newSize;
	};
};

var buydrink1 = function (){
	
	
		for( var beers in drinksJson.drafts){
			if (beers == 0 ){
				boughtdrink1 = new beerConstructor(drinksJson.drafts[0].beer, 
				drinksJson.drafts[0].size, drinksJson.drafts[0].country,
				drinksJson.drafts[0].type );
			}else{
				boughtdrink2 = new beerConstructor(drinksJson.drafts[1].beer, 
				drinksJson.drafts[1].size, drinksJson.drafts[1].country,
				drinksJson.drafts[1].type );
			}
			
		}
		
	
	
	
};
buydrink1(); 
boughtdrink1.sizeopt("pint");
console.log(boughtdrink1);
console.log(boughtdrink2);



