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

// ---------------------------------------------------------------------------------

// Animasi Slide

var slideIndex = 1; // Tambahkan variabel slideIndex di luar fungsi currentDiv

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function autoSlide() {
  setInterval(function () {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
      slideIndex = 1;
    }
    showDivs(slideIndex);
  }, 5000); // Ganti angka 5000 dengan interval auto slide dalam milidetik (misalnya 5000 untuk setiap 5 detik)
}

window.onload = function () {
  autoSlide(); // Panggil fungsi autoSlide saat halaman dimuat
};

// ----------------------------------------------------------------------------------

// Animasi mengetik

const textArray = [
  "Butuh jasa konveksi cepat murah dan terpercaya ?",
  "ke IXDIM aja!",
];
const typingDelay = 50; // Delay antara tiap karakter (milidetik)
const erasingDelay = 50; // Delay saat menghapus (milidetik)
const newTextDelay = 600; // Delay sebelum mengetik kembali setelah selesai (milidetik)
const pauseBetweenTexts = 2000; // Waktu jeda sebelum teks pertama dihapus (milidetik)
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textArrayIndex];
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, newTextDelay);
    return;
  }

  if (!isDeleting && charIndex < currentText.length) {
    document.getElementById("typed-text").innerHTML +=
      currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else if (isDeleting && charIndex > 0) {
    document.getElementById("typed-text").innerHTML = currentText.substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(type, erasingDelay);
  } else {
    isDeleting = true;
    setTimeout(type, pauseBetweenTexts); // Menambah waktu jeda sebelum penghapusan dimulai
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay);
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
