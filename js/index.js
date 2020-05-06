$(document).ready(function(){
	$(".close").click(function(){
		$('.popup').hide();
	});
	
	$(".picture").click(function(){
		$(this).toggleClass('bigimage');
	});
});