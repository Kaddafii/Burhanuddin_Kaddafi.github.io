// fungsi burger menu
const hamburger = document.querySelector(".hamburger input");
const menuNavbar = document.querySelector(".menu-navbar");

hamburger.addEventListener("change", () => {
  if (hamburger.checked) {
    menuNavbar.classList.add("aktif");
  } else {
    menuNavbar.classList.remove("aktif");
  }
});

// fungsi animasi mengetik text home
const dynamicText = document.getElementById("dynamic-text");

const texts = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 100;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    dynamicText.textContent = currentText.slice(0, charIndex--);
  } else {
    dynamicText.textContent = currentText.slice(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }
}

let typingInterval = setInterval(type, typingSpeed);
