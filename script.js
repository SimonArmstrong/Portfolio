var selected = "";
var aboutTabOpen = false;
var gamesTabOpen = false;

$(document).ready(function(){
	$("#main").hide();
	$("#slidebutton-up").hide();
	$("#showabout-down").hide();
	$("#asteroidslink").hide();
	$("#platformerlink").hide();
	$("#info").hide();
	$("#Ninjiblink").hide();
	$("#overworldlink").hide();
	document.getElementById("center-page").style.height = window.innerHeight - 150;
	document.getElementById("GamesandWeb").style.height = window.innerHeight - 150;
	
    $("#asteroids").mouseenter(function(){
		$("#r1c1").fadeTo('fast', 0.8);
	});
	$("#slidebutton-down").click(function(){
		gamesTabOpen = true;
		$("#main").slideDown(400);
		$("#center-page").animate({
			height : "-=417px"
		});
		$("#GamesandWeb").animate({
			height : "-=417px"
		});
		$("#slidebutton-down").hide();
		$("#slidebutton-up").show();
	});
	$("#slidebutton-up").click(function(){
		gamesTabOpen = false;
		$("#main").slideUp(400);
		$("#center-page").animate({
			height : "+=417px"
		});
		$("#GamesandWeb").animate({
			height : "+=417px"
		});
		$("#slidebutton-up").hide();
		$("#slidebutton-down").show();
	});
	
	$("#showabout-down").click(function(){
		aboutTabOpen = false;
		$("#center-page").animate({
			height : "+=400px"
		});
		$("#GamesandWeb").animate({
			height : "+=400px"
		});
		$("#showabout-down").hide();
		$("#showabout-up").show();
		$("#info").hide();
	});
	$("#showabout-up").click(function(){
		aboutTabOpen = true;
		$("#center-page").animate({
			height : "-=400px"
		}, function(){
			$("#info").fadeTo('slow', 1);
		});
		$("#GamesandWeb").animate({
			height : "-=400px"
		});
		$("#showabout-up").hide();
		$("#showabout-down").show();
	});
	
	$("#asteroids").mouseleave(function(){
		$("#r1c1").fadeTo('fast', 1);
	});
	$("#asteroids").click(function(){
		if($("#r1c1").height() >= 450){
			$("#r1c1").animate({
				height : '-=250px',
				width : '-=250px'
			}, function(){
				selected = "";
			});
			$("#asteroidslink").hide();
			$("#asteroids").fadeTo('slow', 1);
		} else if (selected === "" && $(this).height() <= 200){
			$("#r1c1").animate({
				height : '+=250px',
				width : '+=250px'
			});
			selected = this;
			$("#asteroidslink").fadeTo('slow', 1.0);
		}
	});
	
	$("#platformer").mouseenter(function(){
		$("#r1c2").fadeTo('fast', 0.8);
	});
	$("#platformer").mouseleave(function(){
		$("#r1c2").fadeTo('fast', 1);
	});
	$("#platformer").click(function(){
		if($("#r1c2").height() >= 450){
			$("#r1c2").animate({
				height : '-=250px',
				width : '-=250px'
			}, function(){
				selected = "";
			});
			$("#platformerlink").hide();
			$("#platformer").fadeTo('slow', 1);
		} else if(selected === "" && $(this).height() <= 200) {
			$("#r1c2").animate({
				height : '+=250px',
				width : '+=250px'
			});
			selected = this;
			$("#platformerlink").fadeTo('slow', 1.0);
		}
	});
	
	$("#Ninjib").mouseenter(function(){
		$("#r1c3").fadeTo('fast', 0.8);
	});
	$("#Ninjib").mouseleave(function(){
		$("#r1c3").fadeTo('fast', 1);
	});
	$("#Ninjib").click(function(){
		if($("#r1c3").height() >= 450){
			$("#r1c3").animate({
				height : '-=250px',
				width : '-=250px'
			}, function(){
				selected = "";
			});
			$("#Ninjiblink").hide();
			$("#Ninjib").fadeTo('slow', 1);
		} else if(selected === "" && $(this).height() <= 200) {
			$("#r1c3").animate({
				height : '+=250px',
				width : '+=250px'
			});
			selected = this;
			$("#Ninjiblink").fadeTo('slow', 1.0);
		}
	});
	
	$("#overworld").mouseenter(function(){
		$("#r2c1").fadeTo('fast', 0.8);
	});
	$("#overworld").mouseleave(function(){
		$("#r2c1").fadeTo('fast', 1);
	});
	$("#overworld").click(function(){
		if($("#r2c1").height() >= 450){
			$("#r2c1").animate({
				height : '-=250px'
			}, function(){
				selected = "";
			});
			$("#overworldlink").hide();
			$("#overworld").fadeTo('slow', 1);
		} else if(selected === "" && $(this).height() <= 200) {
			$("#r2c1").animate({
				height : '+=250px'
			});
			selected = this;
			$("#overworldlink").fadeTo('slow', 1.0);
		}
	});
});

function onWindowResize()
{
	if(aboutTabOpen){
		$("#center-page").animate({
			height : "+=400px"
		});
		$("#GamesandWeb").animate({
			height : "+=400px"
		}, function(){
			document.getElementById("center-page").style.height = window.innerHeight - 150;
			document.getElementById("center-page").style.width = window.innerWidth - 16;
			document.getElementById("GamesandWeb").style.height = window.innerHeight - 150;
		});
		$("#showabout-down").hide();
		$("#showabout-up").show();
		$("#info").hide();
		aboutTabOpen = false;
	}
	else
	{
		document.getElementById("center-page").style.height = window.innerHeight - 150;
		document.getElementById("center-page").style.width = window.innerWidth - 16;
		document.getElementById("GamesandWeb").style.height = window.innerHeight - 150;
	}
	
	if(gamesTabOpen){
		$("#main").slideUp(400);
		$("#center-page").animate({
			height : "+=417px"
		});
		$("#GamesandWeb").animate({
			height : "+=417px"
		}, function(){
			document.getElementById("center-page").style.height = window.innerHeight - 150;
			document.getElementById("center-page").style.width = window.innerWidth - 16;
			document.getElementById("GamesandWeb").style.height = window.innerHeight - 150;
		});
		$("#slidebutton-up").hide();
		$("#slidebutton-down").show();
		gamesTabOpen = false;
	}
	else
	{
		document.getElementById("center-page").style.height = window.innerHeight - 150;
		document.getElementById("center-page").style.width = window.innerWidth - 16;
		document.getElementById("GamesandWeb").style.height = window.innerHeight - 150;
	}
}

window.addEventListener('resize', onWindowResize);
