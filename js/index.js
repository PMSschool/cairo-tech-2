var nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
};
