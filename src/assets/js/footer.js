$(window).scroll(function(event) {
	function footer()
    {
        var scroll = $(window).scrollTop(); 
        if(scroll < 3250)
        { 
            $(".footer-nav").fadeIn("slow").addClass("sticky");

        }
        else
        {
            $(".footer-nav").fadeOut( "fast").removeClass("sticky");
        }
        
     
    }
    footer();
});
