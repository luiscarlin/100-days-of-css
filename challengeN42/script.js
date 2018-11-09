// jQuery v3.3.1 is supported
let numberStars = 250;

for (var i = 1; i <= numberStars; i++) {
	$('.sky').append("<div class='star star-" + i + "'></div>");
}
