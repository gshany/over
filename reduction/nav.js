$(function(){
	$('.item-icon').mouseover(function(){
		$(this).children('ul').show()
	})
	
	$('.item-icon').mouseout(function(){
		$(this).children('ul').hide()
	})
})