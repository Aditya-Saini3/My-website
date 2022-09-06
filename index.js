function changeBg() {
    const header = document.querySelector('header')
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 50) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}


window.addEventListener('scroll', changeBg);