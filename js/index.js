$(document).ready(function () {
  const carousel = $(".custom-carousel");

  carousel.owlCarousel({
    autoWidth: true,
    loop: true
  });

  carousel.on('click', '.item', function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });

  carousel.on('wheel', function (e) {
    if (e.originalEvent.deltaY < 0) {
      carousel.trigger('prev.owl.carousel');
    } else {
      carousel.trigger('next.owl.carousel');
    }
    e.preventDefault();
  });
});
