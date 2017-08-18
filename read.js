var fs = require('fs');
fs.readFile('Table1.3_g20_2013.csv',function(err,data){
	if(err){
	console.log(err);
	}else{
	console.log(data.toString());
	}
});
