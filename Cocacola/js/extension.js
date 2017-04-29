// popup text box
window.onload = function() {
	document.getElementById("about").onclick = function(){
        var popup = document.getElementById("aboutBox");
        popup.style.display = "block";
    };
	document.getElementById("site").onclick = function(){
        var popup = document.getElementById("siteBox");
        popup.style.display = "block";
    };
	document.getElementById("ref").onclick = function(){
        var popup = document.getElementById("refBox");
        popup.style.display = "block";
    };
	document.getElementById("cokeDetail").onclick = function(){
        var popup = document.getElementById("cokeBox");
        popup.style.display = "block";
    };
	document.getElementById("spriteDetail").onclick = function(){
        var popup = document.getElementById("spriteBox");
        popup.style.display = "block";
    };
	document.getElementById("pepperDetail").onclick = function(){
        var popup = document.getElementById("pepperBox");
        popup.style.display = "block";
    };
    
	document.getElementById("closeAbout").onclick = function(){
        var popup = document.getElementById("aboutBox");
        popup.style.display = "none";    
	};
	document.getElementById("closeSite").onclick = function(){
        var popup = document.getElementById("siteBox");
        popup.style.display = "none";    
	};
	document.getElementById("closeRef").onclick = function(){
        var popup = document.getElementById("refBox");
        popup.style.display = "none";    
	};
	document.getElementById("closeCoke").onclick = function(){
        var popup = document.getElementById("cokeBox");
        popup.style.display = "none";    
	};
	document.getElementById("closeSprite").onclick = function(){
        var popup = document.getElementById("spriteBox");
        popup.style.display = "none";    
	};
	document.getElementById("closePepper").onclick = function(){
        var popup = document.getElementById("pepperBox");
        popup.style.display = "none";    
	};
};

//swap menu
function swap(selected) {
	<!-- First don't display all div id contents -->
	document.getElementById('home').style.display = 'none';
	document.getElementById('coke').style.display = 'none';
	document.getElementById('sprite').style.display = 'none';
	document.getElementById('pepper').style.display = 'none';
	document.getElementById('download').style.display = 'none';
	
	<!-- Then display the selected div id contents -->	
	document.getElementById(selected).style.display = 'block';
}

//x3dom animation
function rotateCan(){
    if(document.getElementById('cCan__coke_can-17-TIMER').getAttribute('enabled')!= 'true'){
         document.getElementById('cCan__coke_can-17-TIMER').setAttribute('enabled', 'true');
	}else{
         document.getElementById('cCan__coke_can-17-TIMER').setAttribute('enabled', 'false');
	}
}
function rotateBottle(){
    if(document.getElementById('bottle__sprite_bottle-TIMER').getAttribute('enabled')!= 'true'){
         document.getElementById('bottle__sprite_bottle-TIMER').setAttribute('enabled', 'true');
	}else{
         document.getElementById('bottle__sprite_bottle-TIMER').setAttribute('enabled', 'false');
	}
}
function rotateCup(){
    if(document.getElementById('cup__cup-2-TIMER').getAttribute('enabled')!= 'true'){
         document.getElementById('cup__cup-2-TIMER').setAttribute('enabled', 'true');
	}else{
         document.getElementById('cup__cup-2-TIMER').setAttribute('enabled', 'false');
	}
}

//Home page slideshow
$(document).ready(function() {
	// slideshow
	$('#homeSlideshow ul li').show();
		play();
		function play() {
			i = 0;
			run = setInterval(function(){
				$($('#homeSlideshow li').fadeOut(500).siblings().andSelf().get(++i % $('#homeSlideshow li').length)).fadeIn(1000);
			}, 5000);
		}
		$(window).resize(function() {
			$('#homeSlideshow').css('height', $('#homeSlideshow').width()/2.7);
		});
});