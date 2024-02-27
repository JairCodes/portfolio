function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // targeting these two elements
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // open toggled classes 
    icon.classList.toggle("open");
}