// hamburger-menu

const navbarMenu = document.querySelector(".nav-mobile");

// Jika Hamburger diklik
document.querySelector("#hamburger").addEventListener("click", function (e) {
  navbarMenu.classList.toggle("left-full");
  navbarMenu.classList.toggle("left-0");
  e.preventDefault();
});

// jika menekan apapun diluar hamburger
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.replace("left-0", "left-full");
  }
});

// ----------------------------------------------------------------------------------

// Animasi in/out
const sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
    // else {
    //   sec.classList.remove("show-animate");
    // }
  });
};
