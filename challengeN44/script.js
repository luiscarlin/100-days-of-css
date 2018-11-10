// jQuery v3.3.1 is supported

let numberOfRectangles = 20;

for (var i = 1; i <= numberOfRectangles; i++) {
	$('.center').append("<div class='rect rect-" + i + "'></div>");
}