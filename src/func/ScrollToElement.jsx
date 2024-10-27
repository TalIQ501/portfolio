const ScrollToElement = (element) => {
    window.scroll({
        top: element.offsetTop - 20,
        behavior: 'smooth'
    })
}

export default ScrollToElement;