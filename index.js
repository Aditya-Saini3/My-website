const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const mediaTrack = document.querySelector('.media-track');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in");

let dataArray = []

//Function to renderData into .media-track div
function renderData() {
    let html = ""
    for (let dat of dataArray) {
        html += `
        <div class="media-element">
            <h3>${dat.name}</h3>
            <a href=${dat.url} target="_blank">
            <img src=${dat.imgPath} />
            </a>
            <p>${dat.description}</p>
        </div>
        `
    }
    mediaTrack.innerHTML = html
}

//Fetching Data from data.json file
fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
    dataArray = data
    renderData()
});


document.documentElement.style.setProperty("--_scroll-padding", headerHeight + 20 + "px");

// function to switch bg of navigation
function changeBg() {
    let scrollValue = window.scrollY;
    if(scrollValue > 50) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}

window.addEventListener('scroll', changeBg);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})