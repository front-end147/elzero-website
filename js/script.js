const mainLink = document.querySelector(".main-nav");
const links = document.querySelectorAll("#link");
const megaMenuLink = document.querySelector(".externalLink");
const megaMenu = document.querySelector(".mega__menu");
const toUp = document.querySelector("#toUp");
const inputs = document.querySelectorAll("#input");
const sections = document.querySelectorAll("section");
const skillsSection = document.getElementById("our-skills");
let spans = document.querySelectorAll(".progressFill span");
const counterBox = document.querySelector(".counterBox");
const statsSection = document.querySelector("#stats");
const numbers = document.querySelectorAll("#stats .number");
let started = false; // function started ? No

// loop for each link in the nav menu
links.forEach((link) => {
  // event to scroll each sectoin which has the id = data-nav
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.dataset.nav) {
      document.getElementById(e.target.dataset.nav).scrollIntoView({behavior: "smooth"});
    }
  });
});

// to show the menu when clicking on the "Other Links"
megaMenuLink.onclick = () => {
  megaMenuLink.classList.toggle("active");
  megaMenu.classList.toggle("active");
};

// scroll event
window.addEventListener("scroll", () => {
  // remove class from the menu
  megaMenuLink.classList.remove("active");
  megaMenu.classList.remove("active");
  // show button to up when scrolling to the bottom
  if (scrollY > 200) {
    toUp.classList.add("active");
  }
  else {
    toUp.classList.remove("active");
  }
  // scroll section
  // to make progress bar fill with animate when the user reach to it
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = `${span.dataset.percent}%`;
    });
  }
  // to make the number start to the desired number
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (!started) {
      numbers.forEach((number) => {
        startCount(number);
      });
      started = true;
    }
  }
  // if section is in the viewport the main__heading will be animate like the hover
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top >= -500 && section.getBoundingClientRect().top <= 150) {
      section.classList.add("isActive");
    }
    else {
      section.classList.remove("isActive");
    }
  });
});
//function to get the data attribute and count to it
function startCount(e) {
  let num = e.dataset.num;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == num) {
      clearInterval(count);
    }
  }, 1000 / num);
}

// to close the menu by clicing on "Esc" button on the keyboard
window.onkeydown = (e) => {
  if (e.key === "Escape") {
    megaMenuLink.classList.remove("active");
    megaMenu.classList.remove("active");
  }
};

// scroll to top
toUp.addEventListener("click", () => {
  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
});

// variable to the desierd date
let futureDate = new Date("Nov 15, 2021 23:59:59").getTime();
// interval to calc the days, hours, minutes and seconds which are remaining from now to the desierd date
let counter = setInterval(() => {
  let remainTime = futureDate - new Date().getTime();
  let days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
  let hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((remainTime % (1000 * 60)) / (1000));
  document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
  // condition to stop the counter and change the content if desired date was came
  if (remainTime <= 0) {
    clearInterval(counter);
    counterBox.innerHTML = `<div style="color: #2196f3; font-size: 2.5rem">Event End <i class="fas fa-sad-tear" style="color: #ffb100;"></i></div>`;
  }
}, 1000);

// loop for each input of all inputs which take the id input
inputs.forEach((input) => {
  // to check if the input is empty or not while user typing
  input.addEventListener("input", () => {
    if (input.value != "") {
      input.classList.add("valid");
    }
    else {
      input.classList.remove("valid");
    }
  });
});