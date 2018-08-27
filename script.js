$(document).ready(function(){   
   
   
	/*Animation Scroll*/
	$('.wrapper').waypoint(function(direction){
		$('.wrapper').addClass('animated flipInX');
	},{
		
	offset:'80%'
		
		
	});
	
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeInLeftBig');
	},{
		
	offset:'80%'
		
		
	});
	
	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInRightBig');
	},{
		
	offset:'80%'
		
		
	});
	
	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeInLeftBig');
	},{
		
	offset:'80%'
		
		
	});
	
});