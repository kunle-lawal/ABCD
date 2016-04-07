function ranColor() {
    var num = Math.floor(Math.random() * Math.pow(2,24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
}

function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

function GID(id){
  return document.getElementById(id);
}

var x = "";
var sec = 4;
var alphabet = ["A", "B", "C", "E", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
$(".alpha").click(function(){
    x = $(this).html();
	document.getElementById("display").innerHTML = x;
	var t = this;
	display(t);
});

function display(t){
	$(t).toggleClass("display_");
	window.setTimeout(function(){
        $(t).removeClass("display_"); 
    }, 1000 * sec);
}
$("#display").click(function(){
    $(this).addClass("none");
});

shuffle();

//shuffle board
function shuffle(){
	for(var i = 0; i < alphabet.length; i++){
		GID("alpha"+Math.round(randNum(0,26))).innerHTML = alphabet[i];
	}
}

$(".ran").click(function(){
	var rand = window.setInterval(function(){
		shuffle();
	}, 100);
	
	window.setTimeout(function(){
		window.clearInterval(rand);
	}, 1400);
});


  

