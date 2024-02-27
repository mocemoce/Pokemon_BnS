const menu = document.getElementById("menu-btn")
const closes = document.getElementById("close-btn")
const navLinks = document.getElementById("nav-links");

    menu.addEventListener('click', () => {
        navLinks.style.right = "0";
        close.style.display = "block";
    });

    closes.addEventListener('click', () => {
        navLinks.style.right = "-200px";
        close.style.display = "none";
    });

