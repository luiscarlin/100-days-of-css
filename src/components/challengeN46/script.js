// jQuery v3.3.1 is supported
let layers = document.querySelectorAll('.layer')
let adding = 0;

layers.forEach((layer, index) => {
	createDots(layer, index);
});

function createDots(currentLayer, index) {
	adding += 5;

	currentLayer.style.animation = `lvl-${index} 6s ease-in-out alternate infinite`;
	currentLayer.style.opacity = 1 - index / 6;

	for (let i = 0; i < 12; i++) {
		let dot = document.createElement('div');
		dot.classList.add('dot');
		dot.style.transform = `translate3d(0, -100px, 0) rotate(${i * 30 + adding}deg)`;

		currentLayer.appendChild(dot);
	}
}