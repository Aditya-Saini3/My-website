const header = document.querySelector('header');
const headerHeight = header.offsetHeight;


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