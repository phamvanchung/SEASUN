// Spinner;
var spinner = function () {
  setTimeout(function () {
    var spinnerElement = document.querySelector("#spinner");
    if (spinnerElement !== null) {
      spinnerElement.classList.remove("show");
    }
  }, 1);
};
spinner();

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 60) {
    navbar.classList.add("sticky-top", "shadow-sm");
  } else {
    navbar.classList.remove("sticky-top", "shadow-sm");
  }
});

var swiper = new Swiper(".mySwiper", {});

//scroll to top
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 300) {
//     var backToTopElement = document.querySelector(".back-to-top");
//     if (backToTopElement !== null) {
//       backToTopElement.style.display = "block";
//       fadeIn(backToTopElement);
//     }
//   } else {
//     var backToTopElement = document.querySelector(".back-to-top");
//     if (backToTopElement !== null) {
//       fadeOut(backToTopElement);
//     }
//   }
// });

// document.querySelector(".back-to-top").addEventListener("click", function () {
//   animateScrollTop(0, 1000, "easeInOutExpo");
//   return false;
// });

// function fadeIn(element) {
//   var opacity = 0;
//   element.style.opacity = opacity;
//   var interval = setInterval(function () {
//     opacity += 0.1;
//     element.style.opacity = opacity;
//     if (opacity >= 1) {
//       clearInterval(interval);
//     }
//   }, 100);
// }

// function fadeOut(element) {
//   var opacity = 1;
//   element.style.opacity = opacity;
//   var interval = setInterval(function () {
//     opacity -= 0.1;
//     element.style.opacity = opacity;
//     if (opacity <= 0) {
//       element.style.display = "none";
//       clearInterval(interval);
//     }
//   }, 100);
// }

// function animateScrollTop(to, duration, easing) {
//   var start = window.pageYOffset || document.documentElement.scrollTop;
//   var currentTime = 0;
//   var increment = 20;

//   var animateScroll = function () {
//     currentTime += increment;
//     var easeValue = easingFunction(currentTime / duration);
//     var scrollTop = easeValue * (to - start) + start;
//     window.scrollTo(0, scrollTop);
//     if (currentTime < duration) {
//       setTimeout(animateScroll, increment);
//     }
//   };

//   animateScroll();
// }

function easingFunction(t) {
  return t < 0.5
    ? 0.5 * Math.pow(2 * t, 2)
    : -0.5 * ((2 * t - 1) * (2 * t - 3) - 1);
}
