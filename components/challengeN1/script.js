// jQuery v3.3.1 is supported
$(document).ready(function(){
	setTimeout(function(){
	$(".modal").removeClass("out");
		},500);
	$("button").click(function(){
		$(this).parent().addClass("out").css("transition", "all 500ms cubic-bezier(0.50, -0.25, 0.60, 0.75) 0s");
	})
});