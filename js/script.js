const mainLink = document.querySelector(".main-nav");
const links = document.querySelectorAll("#link");
const megaMenuLink = document.querySelector(".externalLink");
const megaMenu = document.querySelector(".mega__menu");
const toUp = document.querySelector("#toUp");
const skillsSection = document.getElementById("our-skills");
let spans = document.querySelectorAll(".progressFill span");
const counterBox = document.querySelector(".counterBox");


links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.dataset.nav) {
      document.getElementById(e.target.dataset.nav).scrollIntoView({behavior: "smooth"});
    }
  })
})


megaMenuLink.onclick = () => {
  megaMenuLink.classList.toggle("active");
  megaMenu.classList.toggle("active");
};


window.addEventListener("scroll", () => {
  megaMenuLink.classList.remove("active");
  megaMenu.classList.remove("active");
  if (scrollY > 200) {
    toUp.classList.add("active");
  }
  else {
    toUp.classList.remove("active");
  }
  // scroll section
  if (window.scrollY >= skillsSection.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = `${span.dataset.percent}%`;
    });
  }
});


window.onkeydown = (e) => {
  if (e.key === "Escape") {
    megaMenuLink.classList.remove("active");
    megaMenu.classList.remove("active");
  }
}


toUp.addEventListener("click", () => {
  window.scrollTo({top: 0, left: 0, behavior: "smooth"})
});


let futureDate = new Date("Nov 15, 2021 23:59:59").getTime();
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
  
  if (remainTime <= 0) {
    clearInterval(counter);
    counterBox.innerHTML = `<div style="color: #2196f3; font-size: 2.5rem">Event End <i class="fas fa-sad-tear" style="color: #ffb100;"></i></div>`;
  }
}, 1000);