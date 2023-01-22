window.onload = () => {
    const toggleMenuElement = document.getElementById('toggle-menu');
    const mainMenuElement = document.getElementById('main-menu');

    toggleMenuElement.addEventListener('click', () => {
        display = getComputedStyle(e.target).display;
        if (display === "none") {
            mainMenuElement.style.display = "block";
        } else {
            mainMenuElement.style.display = "none";
        }
    });
}


/*toggleMenuElement.addEventListener('click', () => {
    console.log("hola")
    mainMenuElement.classList.toggle('main-menu--show');
});*/