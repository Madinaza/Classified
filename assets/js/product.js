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

const toglesub = document.querySelector(".toglesub");
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

var subHeader = document.querySelector(".sub-header");

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

userbtn.addEventListener("blur", (event) => {
  submenu.classList.remove("open-menu");
});

let barBtn = document.querySelector(".bar");
let barBtnIcon = document.querySelector(".bar i");
let barDropDown = document.querySelector(".bardrop-down-menu");

barBtn.onclick = function () {
  barDropDown.classList.toggle("open");
  const isOpen = barDropDown.classList.contains("open");
  barBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

$(document).ready(function () {
  $(".product-widget-link").on("click", function () {
    // Toggle "active" class on the clicked link
    $(this).toggleClass("active");

    // Toggle the dropdown associated with the clicked link
    $(this).next(".product-widget-dropdown").slideToggle("slow");

    // Close other open dropdowns
    $(".product-widget-dropdown")
      .not($(this).next(".product-widget-dropdown"))
      .slideUp("slow");

    // Remove "active" class from other links
    $(".product-widget-link").not(this).removeClass("active");
  });

  $(".ad-feature-slider").slick({
    autoplay: !0,
    infinite: !0,
    arrows: !0,
    centerMode: !0,
    centerPadding: "120px",
    speed: 800,
    slidesToShow: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: !0,
          centerMode: !0,
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: !0,
          centerMode: !0,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: !1,
          centerMode: !0,
          centerPadding: "35px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 401,
        settings: {
          arrows: !1,
          centerMode: !0,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
