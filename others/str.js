var output = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var cc = ["Asia", "Australia", "Europe", "North America", "South America"]
var c = [0,0,0,0,0]
var writeableStream = require("fs").createWriteStream("pop.json")
readableStream.on('line', function(line) {
    var objA = {}
    var lineSplit = line.split(','); //main jason 
    objA.countryName = lineSplit[0];
    objA.Population = lineSplit[5];
    if (objA.countryName == 'European Union' || objA.countryName == 'World') {
    }
     else {output.push(objA);}
});
readableStream.on('close', function(line) {
	output.shift();
    var obj = output.filter(e => e.Population) // population
        .sort((a, b) => (b.Population - a.Population))
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
    var lineSplit = line.split(','); //gdp jason 
    objb.ountryName = lineSplit[0];
    objb.Gdp = lineSplit[9];
    if (objb.countryName == 'European Union' || objb.countryName == 'World') { }
    else {result.push(objb);}
});
readableStream.on('close', function(line) {
	result.shift();
    var obj = result.filter(e => e.Gdp) // gdp jason
        .sort((a, b) => (b.Gdp - a.Gdp))
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
    var lineSplit = line.split(','); //purchasing jason 
    objc.countryName = lineSplit[0];
    objc.Purchasingpower = lineSplit[17];
    if (objc.countryName == 'European Union' || objc.countryName == 'World') {
    }
     else {
    outcome.push(objc);
}
});
readableStream.on('close', function(line) {
	outcome.shift();
    var obj = outcome.filter(e => e.Purchasingpower) // purchasing jason
        .sort((a, b) => (b.Purchasingpower - a.Purchasingpower))
    writeableStream2.write(JSON.stringify(obj, null, 2))
});

var op = []
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream3 = require("fs").createWriteStream("grs.json")
readableStream.on('line', function(line) {
    var objd = {};
    var lineSplit = line.split(','); //growth jason 
    objd.countryName = lineSplit[0];
    objd.Population2010 = lineSplit[2];
    objd.Population2011 = lineSplit[3];
    objd.Population2012 = lineSplit[4];
    objd.Population2013 = lineSplit[5];
    objd.Purchasingpower2010 = lineSplit[14];
    objd.Purchasingpower2011 = lineSplit[15];
    objd.Purchasingpower2012 = lineSplit[16];
    objd.Purchasingpower2013 = lineSplit[17];
     if (objd.countryName == 'European Union' || objd.countryName == 'World') {
    }
     else {
    op.push(objd);}
});
readableStream.on('close', function(line) {
/*var obj = op.filter(e => e.Population) // population
        .sort((a, b) => (b.Population - a.Population))*/
        writeableStream3.write(JSON.stringify(op, null, 2))
});

var cc = ["Asia", "Australia", "Europe", "North America", "South America"]//4-aggr
var c = [0,0,0,0,0]
var gg = [0,0,0,0,0]
var pp =[0,0,0,0,0]
var res =[], x = [];
var fs = require("fs");
var readableStream = require('readline').createInterface({
    input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});
var writeableStream4 = require("fs").createWriteStream("continent.json")
readableStream.on('line',function(line){
     var con={};
     var lineSplit = line.split(',');
     if(lineSplit[0]== "China"|| lineSplit[0]=="India"|| lineSplit[0]=="Indonesia"|| lineSplit[0]=="Japan"|| lineSplit[0]=="Saudi Arabia"|| lineSplit[0]=="Republic of Korea"|| lineSplit[0]=="Turkey"){
        con.Name = "Asia";
        con.population = lineSplit[5];
        con.Gdp=lineSplit[9]
     } else if(lineSplit[0]=="Australia"){
        con.Name="Australia";
        con.population=lineSplit[5];
        con.Gdp=lineSplit[9]
        con.Purchasingpower =lineSplit[17]
     } else if(lineSplit[0]== "France"|| lineSplit[0]=="Germany"|| lineSplit[0]=="Italy"||lineSplit[0]=="Russia"){
        con.Name="Europe";
        con.population= lineSplit[5];
        con.Gdp=lineSplit[9]
        con.Purchasingpower =lineSplit[17]
     }else if(lineSplit[0] == "USA"|| lineSplit[0]=="Canada"|| lineSplit[0]=="Mexico"){
        con.Name="North America";
        con.population= lineSplit[5];
        con.Gdp=lineSplit[9]
        con.Purchasingpower =lineSplit[17]
    }else if(lineSplit[0] == "Brazil"|| lineSplit[0]=="Argentina"){
        con.Name="South America";
        con.population= lineSplit[5];
        con.Gdp=lineSplit[9]
        con.Purchasingpower =lineSplit[17]
    } res.push(con);
 });
readableStream.on('close', function(line) {   
for(let g=0;g<res.length;g++)
{
if(res[g].Name=="Asia")
{
c[0]+=parseFloat(res[g].population)
gg[0]+=parseFloat(res[g].Gdp)
pp[0]+=parseFloat(res[g].Purchasingpower)
}
if(res[g].Name=="Australia")
{
c[1]+=parseFloat(res[g].population)
gg[1]+=parseFloat(res[g].Gdp)
pp[1]+=parseFloat(res[g].Purchasingpower)
}
if(res[g].Name=="Europe")
{
c[2]+=parseFloat(res[g].population)
gg[2]+=parseFloat(res[g].Gdp)
pp[2]+=parseFloat(res[g].Purchasingpower)
}
if(res[g].Name=="North America")
{
c[3]+=parseFloat(res[g].population)
gg[3]+=parseFloat(res[g].Gdp)
pp[3]+=parseFloat(res[g].Purchasingpower)
}
if(res[g].Name=="South America")
{
c[4]+=parseFloat(res[g].population)
gg[4]+=parseFloat(res[g].Gdp)
pp[4]+=parseFloat(res[g].Purchasingpower)
}

}
for(let k=0;k<5;k++)
{
 var obj4={
    continent: cc[k],
    population: c[k],
    gdp: gg[k]
 }
x.push(obj4)
 } 
 x.sort(function(a,b){return b.population-a.population})
    writeableStream4.write(JSON.stringify(x, null, 2))
});


