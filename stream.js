/*var fs = require('fs');
var readableStream = fs.createReadStream('Table1.3_g20_2013.csv');
var data ='';
readableStream.setEncoding('utf8');
readableStream.on('data',function(chunk){
	data+=chunk;
	a=data
	.trim()
	.split('\n')
	.map((data)=>data.split(','));
});
readableStream.on('end',function(){
	var obj=[];
	for(let i=1;i<a.length;i++){
		obj[i] ={
			country:a[i][0],
			year:a[i][5]
		}
	}
	fs.writeFile('a.json',JSON.stringify(obj,null,2))
});*/

var output =[];
var fs = require("fs");
var readableStream = require('readline').createInterface({
	input:require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream = require("fs").createWriteStream("b.json")
readableStream.on('line',function(line){
	var objA={}
	var lineSplit =line.split(',');                               //main jason 
	objA.countryName = lineSplit[0];
	objA.Population = lineSplit[5];
	objA.Gdp = lineSplit[9];
	objA.Purchasingpower = lineSplit[17];

	output.push(objA);
});
readableStream.on('close',function(line){
	writeableStream.write(JSON.stringify(output,null,2))
});

var writeableStream1 =require("fs").createWriteStream("population.json")
readableStream.on('close',function(line){
	var obj = output.filter(e => e.Population )                                            // population
   .sort((a, b) => (b.Population - a.Population))
   /*console.log(obj);*/
   writeableStream1.write(JSON.stringify(obj,null,2))
});
var writeableStream2 =require("fs").createWriteStream("Gdp.json")
readableStream.on('close',function(line){
	var obj = output.filter(e => e.Gdp )                                            // gdp
   .sort((a, b) => (b.Gdp - a.Gdp))
   /*console.log(obj);*/
   writeableStream2.write(JSON.stringify(obj,null,2))
});
var writeableStream3 =require("fs").createWriteStream("PurchasingPower.json")
readableStream.on('close',function(line){
	var obj = output.filter(e => e.Purchasingpower )                                            // PurchasingPower
   .sort((a, b) => (b.Purchasingpower - a.Purchasingpower))
   /*console.log(obj);*/
   writeableStream3.write(JSON.stringify(obj,null,2))
});

