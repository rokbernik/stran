jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery('.toggle-nav').toggleClass('active');
        jQuery('nav ul').toggleClass('active');
 
        e.preventDefault();
    });
});

jQuery(document).ready(function() {
    jQuery('.dropmenu1>a').click(function(e) {
        jQuery('nav ul li.dropmenu1 ul').toggleClass('active');
 
        e.preventDefault();
    });
});

jQuery(document).ready(function() {
    jQuery('.dropmenu2>a').click(function(e) {
        jQuery('nav ul li.dropmenu2 ul').toggleClass('active');
 
        e.preventDefault();
    });
});

jQuery(document).ready(function() {
    jQuery('nav ul li ul li').click(function(e) {
	var clicked=jQuery(this).children("ul");;
        jQuery(clicked).toggleClass('active');
 
    });
});