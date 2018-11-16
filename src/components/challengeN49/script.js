// jQuery v3.3.1 is supported
$(function() {
	const numberOfCells = 400

	for(let i = 0; i < numberOfCells; i++) {
		$(".frame").append('<div class="cell"></div>')
	}

	$(".frame").append('<div class="dot"></div>')
})