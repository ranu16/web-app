
"using strict"
var results = $("#results");
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

	console.log(abhi);
	
	var abhish = {
		name:"abhishek",
		group:"mech",
		house:"rajeev"
	};
		
$(document).ready(function(){

var togglebutton =$("#togglebutton");
togglebutton.on("click",function (){
	console.log("botton clicked");
	results.toggle(500);
	if (togglebutton.text()==="hide") {togglebutton.text("show");}
	 else {togglebutton.text("hide");};

	 
	});

$("#loginform").on("submit",function(){ 
	
	
	if (username && password) {
		
		$("#errorshown").empty();
	
	$("#loginform").hide();
	$("#loggedin").show();
	{
	results.empty();
	 $.each(abhi,function(i,item) {
	 	 var newthings =$("<div class ='abhishek'>"+
	 "<div class='title'>"+ abhi[i].title +"</div>"+
	 "<div>" + "name :"+ abhi[i].name +"</div>"+
	  "<div>" + "group :"+ abhi[i].group +"</div>"+
	   "<div>" + "house :"+ abhi[i].house +"</div>"+
	 "</div>");
	 	
	 results.append(newthings);

	 newthings.hover(function(){
	 	$(this).css("color","blue");
	 	$(this).css("background-color","lightgray");

	 },function(){
	 	$(this).css("color","black");
	 $(this).css("background-color","transparent");

	 });


       });
	// body...
}

	

	 }

	
    else {
    	console.log("error happened");
    	$("#errorshown").text("username and password are mandetory!");
    
    }

	return false;
    })
$("#logoutbutton").on('click',function(){

	$("#loginform").show();
	$("#loggedin").hide();
	results.empty();
	results.text("Please login to see all the information.")
})

});

 


	/*function notice1(msg1,callback) {
		console.log(msg1);
		callback();
		// body...
	}
function notice() {
		console.log("dhoni");
}
	notice1("yuvi",notice);

	var abhi=[{
		name:"abhishek",
		group:"mech",
		house:"rajeev"
	},{
		name:"abhi",
		group:"mechan",
		house:"rajeev"
	},{
		name:"abhish",
		group:"mech",
		house:"raje"
	}];
	console.log(abhi);
	
	var abhish = {
		name:"abhishek",
		group:"mech",
		house:"rajeev"
	};
	console.log(abhish);
	abhish.edu="btech";
	abhish.property= function(a,b) {
		return a+b;
	};
	console.log(abhish);
	abhish.property(12,32);

	for (var i = abhi.length - 1; i >= 0; i--) {
		console.log(abhi[i].name);
		abhish.property(i,0);
		if (abhish.property(i,0)==1) {
		console.log("we got the condition")
	} else {console.log("sorry")};

	};
	*/