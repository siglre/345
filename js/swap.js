$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(450);
    
	$("a.nav-list__link").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(450, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
