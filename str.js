var output = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream = require("fs").createWriteStream("pop.json")
readableStream.on('line', function(line) {
    var objA = {}
    var lineSplit = line.split(','); //main jason 
    objA.countryName = lineSplit[0];
    objA.Population = lineSplit[5];
    if (objA.CountryName == 'European Union' || objA.CountryName == 'World') {
    }
     else {
    
   
    output.push(objA);
  }
});
readableStream.on('close', function(line) {
	output.shift();
    var obj = output.filter(e => e.Population) // population
        .sort((a, b) => (b.Population - a.Population))
    /*console.log(obj);*/
    writeableStream.write(JSON.stringify(obj, null, 2))
});


var result = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream1 = require("fs").createWriteStream("gd.json")
readableStream.on('line', function(line) {
    var objb = {}
    var lineSplit = line.split(','); //main jason 
    objb.ountryName = lineSplit[0];
    objb.Gdp = lineSplit[9];
    if (objb.CountryName == 'European Union' || objb.CountryName == 'World') { }
    
     else {
   
    result.push(objb);
  }
});
readableStream.on('close', function(line) {
	result.shift();
    var obj = result.filter(e => e.Gdp) // population
        .sort((a, b) => (b.Gdp - a.Gdp))
    /*console.log(obj);*/
    writeableStream1.write(JSON.stringify(obj, null, 2))
});

var outcome = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream2 = require("fs").createWriteStream("pur.json")
readableStream.on('line', function(line) {
    var objc = {}
    var lineSplit = line.split(','); //main jason 
    objc.countryName = lineSplit[0];
    objc.Purchasingpower = lineSplit[17];
    if (objc.CountryName == 'European Union' || objc.CountryName == 'World') {
    }
     else {
    outcome.push(objc);
}
});
readableStream.on('close', function(line) {
	outcome.shift();
    var obj = outcome.filter(e => e.Purchasingpower) // population
        .sort((a, b) => (b.Purchasingpower - a.Purchasingpower))
    /*console.log(obj);*/
    writeableStream2.write(JSON.stringify(obj, null, 2))
});


var op = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream3 = require("fs").createWriteStream("growth.json")
readableStream.on('line', function(line) {
    var objd = {};
    var lineSplit = line.split(','); //main jason 
    objd.countryName = lineSplit[0];
    objd.Population = lineSplit[5]-lineSplit[2];
    objd.Purchasingpower = lineSplit[17]-lineSplit[14];
    
    op.push(objd);
});
readableStream.on('close', function(line) {

    var obj = op.filter(e => e.Population) // population
        .sort((a, b) => (b.Population - a.Population))
    /*console.log(obj);*/
    writeableStream3.write(JSON.stringify(obj, null, 2))
});
