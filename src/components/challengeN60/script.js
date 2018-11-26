// jQuery v3.3.1 is supported
$('.frame').on('mousemove', (event) => {
	//console.log(event.originalEvent.layerY);
	$('.hover').css('height', event.originalEvent.layerY);
});