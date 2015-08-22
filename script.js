$(document).ready(function(){
    $("#asteroids").mouseenter(function(){
		$("#r1c1").fadeTo('fast', 0.8);
	});
	$("#asteroids").mouseleave(function(){
		$("#r1c1").fadeTo('fast', 1);
	});
	
	$("#platformer").mouseenter(function(){
		$("#r1c2").fadeTo('fast', 0.8);
	});
	$("#platformer").mouseleave(function(){
		$("#r1c2").fadeTo('fast', 1);
	});
	
	$("#Ninjib").mouseenter(function(){
		$("#r1c3").fadeTo('fast', 0.8);
	});
	$("#Ninjib").mouseleave(function(){
		$("#r1c3").fadeTo('fast', 1);
	});
	
	$("#overworld").mouseenter(function(){
		$("#r2c1").fadeTo('fast', 0.8);
	});
	$("#overworld").mouseleave(function(){
		$("#r2c1").fadeTo('fast', 1);
	});
});