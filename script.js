function bandeja(element) {
    const divText = element.nextElementSibling; 
    const seta = element.querySelector('i');
    
    const divTextDisplay = window.getComputedStyle(divText).display
    
    if (divTextDisplay === "none") {
        divText.style.display = "block";
        seta.classList.replace('fa-chevron-right', 'fa-chevron-down')
    } else {
        divText.style.display = "none";
        seta.classList.replace('fa-chevron-down', 'fa-chevron-right')
    }
}
