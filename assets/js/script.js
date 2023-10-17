// dropdownMenu
let dropdownMegaMenu=document.querySelector(".dropdown-menu");
// let dropdownMenu2=document.querySelector(".dropdown-card2");
let dropdownBtnMegaMenu=document.getElementById("navbarDropdown")
// let dropdownBtn2=document.getElementById("dropdownBtn2")

const toggleDropdown = function () {
  dropdownMegaMenu.classList.toggle("show");
  };

//   const toggleDropdown2 = function () {
//     dropdownMenu2.classList.toggle("show");

//   };
dropdownBtnMegaMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

//   dropdownBtn2.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown2();
//   });
//   dropdownBtn.addEventListener('blur', (event) => {
//     dropdownMenu.classList.remove('show');
//   });
//   dropdownBtn2.addEventListener('blur', (event) => {
//     dropdownMenu2.classList.remove('show');
//   });

////////////////-----------------------------////////////////////



const dropdown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");

dropdown.addEventListener("click", () => {
  list.classList.toggle("show");
});

list.addEventListener("click", (e) => {
  
  const item = e.target.closest(".item");
  if (item) {
    const img = item.querySelector("img");
    const text = item.querySelector(".text");

    if (img && text) {
      selectedImg.src = img.src;
      selected.innerHTML = text.innerHTML;
    }
  }
});



// end of the dropDown

// document.addEventListener("click", function (e) {
//   // Hamburger menu
//   if (e.target.classList.contains("hamburger-toggle")) {
//     e.target.children[0].classList.toggle("active");
//   }
// });

const toglesub = document.querySelector(".sub .toglesub");
const subgroup = document.querySelector(".subgroup");

const togglesubgroup = function () {
  subgroup.classList.toggle("active");
  toglesub.classList.toggle("active", subgroup.classList.contains("active"));
};

toglesub.addEventListener("click", function (e) {
  e.stopPropagation();
  togglesubgroup();
});

var navbar = document.querySelector("nav");
 
var subHeader=document.querySelector(".sub-header")

// window.onscroll = function () {
//   // pageYOffset or scrollY
//   if (window.pageYOffset > 60) {
//     navbar.classList.add("header-fixed");
//   } else {
//     navbar.classList.remove("header-fixed");
//   }
// };

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    subHeader.classList.add("header-fixed");
  } else {
    subHeader.classList.remove("header-fixed");
  }
};


let submenu = document.getElementById("subMenu");
let userbtn = document.querySelector(".userBtn");

function toggleMenu() {
  submenu.classList.toggle("open-menu");
}



userbtn.addEventListener('blur', (event) => {
      submenu.classList.remove('open-menu');
    });


  
  






let barBtn = document.querySelector(".bar");
let barBtnIcon = document.querySelector(".bar i");
let barDropDown = document.querySelector(".bardrop-down-menu");

barBtn.onclick = function () {
  barDropDown.classList.toggle("open");
  const isOpen = barDropDown.classList.contains("open");
  barBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// header part end

// -----------------------------------------------------------

// section part banner start

const filterbtn = document.querySelector(".filterbtn");
const filterContent = document.querySelector(".header-option");

const togglefilterBtn = function () {
  filterContent.classList.toggle("active");
};

filterbtn.addEventListener("click", function (e) {
  e.stopPropagation();
  togglefilterBtn();
});

// owl-Carousel

$(document).ready(function () {
  $(".owl-1").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      350: {
        items: 2,
        nav: true,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      800: {
        items: 4,
        nav: false,
        loop: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
      1200: {
        items: 6,
        nav: true,
        loop: true,
      },
    },
  });

  $(".owl-2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      
      800: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
      1200: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  // home page end////////



// product page/////////





  // $('.slider-single').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   fade: true,
  //  asNavFor: '.slider-nav',
  //   adaptiveHeight: true,
  //   infinite: false,
  //  useTransform: true,
  //   speed: 400,
  //   cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  // });

  // $('.slider-nav')
  //   .on('init', function(event, slick) {
  //     $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  //   })
  //   .slick({
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //    asNavFor: '.slider-single',
  //     dots: true,
  //     focusOnSelect: true,
  //     infinite: false,
  //     responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 5,
  //       }
  //     }, {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //      }
  //     }, {
  //       breakpoint: 420,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //    }
  //     }]
  //   });

  // $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  //   $('.slider-nav').slick('slickGoTo', currentSlide);
  //   var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  //   $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  //   $(currrentNavSlideElem).addClass('is-active');
  // });

  // $('.slider-nav').on('click', '.slick-slide', function(event) {
  //   event.preventDefault();
  //   var goToSingleSlide = $(this).data('slick-index');

  //   $('.slider-single').slick('slickGoTo', goToSingleSlide);
  // });
});

////////////////////////////////////////
// dashboard part

// let reviewDots=document.querySelector('.review-widget');
// let reviewList=document.querySelector('.review-widget-list')

// const toggleReview = function () {
//   reviewList.classList.toggle("active");
// };
// reviewDots.addEventListener("click", function (e) {
//       e.stopPropagation();
//      toggleReview()
//     });