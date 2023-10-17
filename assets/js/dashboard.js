let reviewDots = document.querySelectorAll('.review-widget');
let reviewList = document.querySelectorAll('.review-widget-list')

const toggleReview = function (index) {
  reviewList.forEach(function (listItem, i) {
    if (index === i) {
      listItem.classList.toggle("active");
    } else {
      listItem.classList.remove("active");
    }
  });
};

reviewDots.forEach(function (dot, index) {
  dot.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleReview(index);
  });
});