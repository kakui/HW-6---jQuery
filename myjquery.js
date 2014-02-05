/* This is my jQuery cheatsheet */

// Tells jQuery to run when document is ready
// $(document).ready(function(){

// Hide body
// $("body").hide();

// Show body
// $("body").show();

// Fade Out body over 1000 ms
// $("body").fadeOut(1000);

// Fade In body over 1000 ms
// $("body").fadeIn(1000);

// Slide Up body
// $("body").slideUp();

// Slide Down body
// $("body").slideDown();

// Animate CSS properties in body for opacity, width, and time
// $("body").animate(
	// 	{opacity: 0.25,
	// 	width: 70%}, 
	// 	2000);

// Show alert when link under the list is clicked
// $("ul li a").click( function(){
	// 	alert('imclicked!');	
// });


/* These are the 4 jQuery events */
// Tells jQuery to run when document is ready
$(document).ready(function(){
	// Hide and then show first paragraph
	$("#first").hide();
	$("#first").show();
	// Fade out and Fade in the second paragraph
	$("#second").fadeOut(2000);
	$("#second").fadeIn(2000);
	// Slide up and Slide down third paragraph
	$("#third").slideUp(2000);
	$("#third").slideDown(2000);
	// Animate and change opacity and width at given time for fourth paragraph
	$("#fourth").animate({opacity: .1, width: "40%"}), 2000;
	// Button hides everything when clicked
	$("button").click( function(){
		$("body").hide();
	})
})
