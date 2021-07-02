$(function () {
  /*======================= SHOW/HIDE NAV-MENU =========================*/
  const navMenu = $(".nav-menu");

  $(".nav-toggle").on("click", function () {
    navMenu.toggleClass("show-menu");
  });

  $(".nav-link").each(function (index, element) {
    // element == this
    $(element).on("click", function () {
      navMenu.removeClass("show-menu");
    });
  });

  /*=========================== ISLAND POPUP VIDEO ===========================*/
  $(".island-video-show").on("click", function () {
    $(".island-popup").addClass("show");
  });
  $(".popup-close").on("click", function () {
    $(".island-popup").removeClass("show");
  });

  /*=========================== ISLAND CONTROLS SWIPPRE===========================*/
  let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
  });
  let gallerTop = new Swiper(".galler-top", {
    effect: "fade",
    loop: true,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  /*=========================== GSAP ANIMATION ===========================*/
  $(".island-controls img").on('click', () => {
    gsap.from('.island .subtitle', { opacity: 0, duration: .1, delay: .2, y: -20 })
    gsap.from('.island .title', { opacity: 0, duration: .1, delay: .3, y: -20 })
    gsap.from('.island .description', { opacity: 0, duration: .1, delay: .4, y: -20 })
    gsap.from('.island-data-button', { opacity: 0, duration: .1, delay: .5, y: -20 })
    gsap.from('.island-video-show', { opacity: 0, duration: .1, delay: .6, y: -20 })
  })
});
