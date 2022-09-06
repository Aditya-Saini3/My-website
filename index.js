function changeBg() {
    const header = document.querySelector('header')
    let scrollValue = window.scrollY;
    if(scrollValue > 50) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}


window.addEventListener('scroll', changeBg);