


//old functions 





//firstpage
$(function(){
	$('.background, .page1').hover(function(){
		$('.leftarrow').hide(500);
	});
});

$(function(){
	$('#aboutme, #work, #contact').mouseenter(function(){
		$('.leftarrow').show(1000);
	});
});

//lastpage
$(function(){
	$('.page4').hover(function(){
		$('.rightarrow').hide(500);
	});
});

$(function(){
	$('#aboutme, #work, .background').mouseenter(function(){
		$('.rightarrow').show(1000);
	});
});

//rightarrowbutton
$(function(){
	$('.rightarrow').click(function(){
       $('body').animate( { scrollLeft: '+=1600' }, 1000);
});

    $('.rightarrow').click(function(){
       $('.body').animate( { scrollLeft: '-=1600' }, 1000);
});
	});

//leftarrowbutton
$(function(){
	$('.leftarrow').click(function(){
	   $('body').animate( { scrollLeft: '+=-1600' }, 1000);
});

    $('.leftarrow').click(function(){
       $('.body').animate( { scrollLeft: '-=-1600' }, 1000);
});
	});

//toparrowbutton
$(function(){
	$('.toparrow').click(function(){
       $('.contentpage').animate( { bottom: 770}, 1500);
       $('.contentpage').css(("z-index"), 100);
       $('.freebird').animate( { top: 690 }, 1500);
       $('.freebird').css(("z-index"), 200);   
	});
});



//scroll horizonatlly
/*
var scrollhorizontal = $(function() {

$(window).on('wheel', function(e) {

	var delta = e.originalEvent.deltaY;

	if (delta > 0) $('body').animate( { scrollLeft: '-=-1600' }, 1000);
	else $('body').animate( { scrollLeft: '+=-1600' }, 1000);

	return false; // this line is only added so the whole page won't scroll in the demo
});
});


var right = 1600;
var left = -1600;
var top = 770;
var bottom = -770;

/*
// maximum vertical scroll
var maxScrollV = $('#contentpage')[0].scrollHeight - $('#contentpage').innerHeight();

// Set vertical scroller to bottom
$('#contentpage').scrollTop(maxScrollV);
*/

//animations
//page1

//page2
$(function(){
    $('.page2').mouseenter(function(){
	   $('#blackbar1').animate( { width: 0}, 1000);
});
    $('.background, .page1, .page3, .page4, #work, #contact').mouseenter(function(){
       $('#blackbar1').animate( { width: 455}, 500);
});

});

$(function(){
    $('.page2').mouseenter(function(){
	   $('#blackbar2').animate( { width: 0}, 1000);
});
    $('.background, .page1, .page3, .page4, #work, #contact').mouseenter(function(){
       $('#blackbar2').animate( { width: 480}, 500);
});

});

$(function(){
    $('.page2').mouseenter(function(){
	   $('#blackbar3').animate( { width: 0}, 1000);
});
    $('.background, .page1, .page3, .page4, #work, #contact').mouseenter(function(){
       $('#blackbar3').animate( { width: 200}, 700);
});

});

//new functions
//horizontal scroll

      $('section').horizon();
      $.fn.horizon.defaults = {
    scrollTimeout: null,
    scrollEndDelay: 250,
    scrollDuration: 1000,
    i: 0,
    limit: 0,
    docWidth: 0,
    sections: null,
    swipe: true,
    fnCallback: function (i) {}
};