const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const mediaTrack = document.querySelector('.media-track');

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

// function to switch bg og navigation
function changeBg() {
    let scrollValue = window.scrollY;
    if(scrollValue > 50) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}


window.addEventListener('scroll', changeBg);