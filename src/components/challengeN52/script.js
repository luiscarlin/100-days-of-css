// jQuery v3.3.1 is supported

$(function() {
  numberOfRings = 10
  for (var i = 0; i < numberOfRings; i++) {
    $('.circle').append('<div class="ring ring-' + i + '"></div>')
  }
});