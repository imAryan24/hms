// NAVBAR AUTO-HIDE
document.addEventListener("DOMContentLoaded", function () {
    el_autohide = document.querySelector('.autohide');
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
});
// OWL SLIDER
$('.owl-carousel').owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//  SWIPER SLIDER 
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Google Map API
let map;

function initMap() {
    var location = {
        lat: 29.080985,
        lng: 77.056669
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12
    });
    /*
    
    */
    addMarker({
        coordinates: {
            lat: 38.9897,
            lng: -76.9378
        },
        content: '<h6>Kanak</h6>'
    });
    // addMarker({
    //     coordinates: {
    //         lat: 42.4072,
    //         lng: -71.3824
    //     },
    //     content: '<h6>Secret Mirage - Massachusetts Branch</h6>'
    // });
    // addMarker({
    //     coordinates: {
    //         lat: 39.5501,
    //         lng: -105.7821
    //     },
    //     content: '<h6>Secret Mirage - Colorado Branch</h6>'
    // });
    // addMarker({
    //     coordinates: {
    //         lat: 32.3547,
    //         lng: -89.3985
    //     },
    //     content: '<h6>Secret Mirage - Mississippi Branch</h6>'
    // });
    // addMarker({
    //     coordinates: {
    //         lat: 37.7749,
    //         lng: -122.4194
    //     },
    //     content: '<h6>Secret Mirage - California Branch</h6>'
    // });

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map
        });
        if (properties.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            })
        }
    }
}
// // PRELOADER
// function preloader() {
//     var page = setTimeout(showPage, 5000);
// }
// function showPage() {
//     document.getElementById("loader").style.setProperty('display', 'none', 'important');
//     document.getElementById("body").style.overflow = "visible";
//     document.getElementById("whole__section").style.visibility = "visible";
// }

// FakeLoader
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 4000,
        bgColor: "#C59D5F",
        spinner: "spinner1"
    });
});


//CARDSLIDER

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });


var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 1024px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


// var multipleCardCarousel = document.querySelector(
//   "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 1024px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });
//   var carouselWidth = $(".carousel2-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();
//   var scrollPosition = 0;
//   $("#carouselExampleControls .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 4) {
//       scrollPosition += cardWidth;
//       $("#carouselExampleControls .carousel2-inner").animate(
//         { scrollLeft: scrollPosition },
//         200
//       );
//     }
//   });
// //   $("#carouselExampleControls .carousel-control-prev").on("click", function () {
// //     if (scrollPosition > 0) {
// //       scrollPosition -= cardWidth;
// //       $("#carouselExampleControls .carousel2-inner").animate(
// //         { scrollLeft: scrollPosition },
// //         200
// //       );
// //     }
// //   });
// // } else {
// //   $(multipleCardCarousel).addClass("slide");
// }