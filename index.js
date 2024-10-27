const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const projectsContainer = document.querySelector(".projects-container");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items-list");

let dataArray = [];

//Function to renderData into .media-track div
function renderData() {
  let html = "";
  for (let dat of dataArray) {
    html += `
        <div class="project">
            <a href=${dat.url} target="_blank">
                <img src=${dat.imgPath} class="project__img"/>
            </a>
            <div class="tags-container">
                <h3 class="tag">${dat.type}</h3>
            </div>
            <div class="project__content">
                <a href=${dat.url} target="_blank">
                    <h2 class="project__content-title">${dat.name}</h2>
                </a>
                <p class="project__content-description">${dat.description}</p>
            </div>
            <div class="buttons-container">
                <a href=${dat.repoUrl} target="_blank">
                    <button class="repo-btn">Check it now</button>
                </a>
            </div>
        </div>
        `;
  }
  projectsContainer.innerHTML = html;
}

//Fetching Data from data.json file
fetch("./projectsData.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dataArray = data;
    renderData();
  });

document.documentElement.style.setProperty(
  "--_scroll-padding",
  headerHeight + 20 + "px"
);

// function to switch background-color of navigation bar
function changeBg() {
  let scrollValue = window.scrollY;
  if (scrollValue > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
if (window.innerWidth > 600) {
  window.addEventListener("scroll", changeBg);
}

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//Adding classes "active" to Hamburger icon and nav Menu
//Reminder: Here active class is added on header to make 
//sure header has box shadow when hamburger menu is closed.

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
  })
);
