//Active navbar
$('.navbar .navbar-nav a').on('click',function(){
	$('.navbar-nav').find('li.active').removeClass('active');
	$(this).parent('li').addClass('active');
});

//smooth scroll
$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	begin: function() {
		//I get fired when the animation is starting
	},
	end: function() {
		//I get fired when the animation is ending
	},
	scrollChange: function($currentListItem) {
		//I get fired when you enter a section and I pass the list item of the section
	}
});
//wow js
new WOW().init();
//scroll to top
window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("btn").style.display = "block";
  }else{
    document.getElementById("btn").style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
