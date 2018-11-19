$("[type=range]").on("change ", function() {
  $(".slider-value").html($(this).val());
});