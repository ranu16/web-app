var express = require('express');
var app = express();
var port =3000;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);

app.post('/api/login',function(req,res){
	var abhi = [{

		name:"abhishek",
		group:"mech",
		house:"rajeev",
		title:"study"
	},{
		name:"abhi",
		group:"mechan",
		house:"rajeev",
		title:"sport"
	},{
		name:"abhish",
		group:"mech",
		house:"raje",
		title:"entertainment"
	},{
		name:"abhish",
		group:"mech",
		house:"raje",
		title:"entertainment"
	}];

	res.json(abhi);
})